from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional, List
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
import google.generativeai as genai
import resend

# Load environment variables
load_dotenv()

app = FastAPI(title="Portfolio Backend API")

# Configure Gemini AI
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)
    model = genai.GenerativeModel('gemini-pro')
else:
    model = None
    print("WARNING: GEMINI_API_KEY not found in environment variables")

# CORS Configuration - Allow frontend to call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models for request validation
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str
    phone: Optional[str] = None

class ContactResponse(BaseModel):
    success: bool
    message: str

class ChatMessage(BaseModel):
    role: str  # 'user' or 'assistant'
    content: str

class ChatRequest(BaseModel):
    message: str
    history: Optional[List[ChatMessage]] = []

class ChatResponse(BaseModel):
    response: str
    success: bool

@app.get("/")
async def root():
    return {"message": "Portfolio Backend API", "status": "running"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

@app.post("/api/chat", response_model=ChatResponse)
async def chat_with_ai(chat: ChatRequest):
    """
    Chat with AI assistant powered by Google Gemini
    """
    try:
        if not model:
            raise HTTPException(
                status_code=503,
                detail="AI service is not configured. Please contact the administrator."
            )
        
        # Build context from history
        context = "You are a helpful AI assistant for Nikesh's portfolio website. "
        context += "Be friendly, professional, and helpful. Answer questions about web development, "
        context += "programming, and general topics. Keep responses concise and engaging.\n\n"
        
        if chat.history:
            context += "Previous conversation:\n"
            for msg in chat.history[-5:]:  # Only last 5 messages for context
                context += f"{msg.role}: {msg.content}\n"
        
        context += f"\nUser: {chat.message}\nAssistant:"
        
        # Generate response using Gemini
        response = model.generate_content(context)
        
        return ChatResponse(
            response=response.text,
            success=True
        )
        
    except Exception as e:
        print(f"Chat error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Failed to generate response. Please try again."
        )

@app.post("/api/contact", response_model=ContactResponse)
async def contact_form(form: ContactForm):
    """
    Handle contact form submissions
    """
    try:
        # Log the submission
        print(f"Contact form received from: {form.name} ({form.email})")
        print(f"Message: {form.message}")
        
        # Send email via Resend (recommended)
        RESEND_API_KEY = os.getenv("RESEND_API_KEY")
        CONTACT_TO_EMAIL = os.getenv("CONTACT_TO_EMAIL")
        FROM_EMAIL = os.getenv("FROM_EMAIL", "Portfolio <onboarding@resend.dev>")

        if RESEND_API_KEY and CONTACT_TO_EMAIL:
            resend.api_key = RESEND_API_KEY
            subject = f"Portfolio Contact: {form.name}"
            body = (
                f"Name: {form.name}\n"
                f"Email: {form.email}\n"
                f"Phone: {form.phone or 'Not provided'}\n\n"
                f"Message:\n{form.message}\n"
            )
            try:
                resend.Emails.send({
                    "from": FROM_EMAIL,
                    "to": CONTACT_TO_EMAIL,
                    "subject": subject,
                    "text": body,
                })
            except Exception as e:
                print(f"Resend error: {e}")
        else:
            print("Resend not configured; skipping email send.")

        return ContactResponse(
            success=True,
            message="Thank you for your message! I'll get back to you soon."
        )
        
    except Exception as e:
        print(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to process contact form")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
