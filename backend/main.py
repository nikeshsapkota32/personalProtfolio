from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = FastAPI(title="Portfolio Backend API")

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

@app.get("/")
async def root():
    return {"message": "Portfolio Backend API", "status": "running"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

@app.post("/api/contact", response_model=ContactResponse)
async def contact_form(form: ContactForm):
    """
    Handle contact form submissions
    """
    try:
        # Log the submission
        print(f"Contact form received from: {form.name} ({form.email})")
        print(f"Message: {form.message}")
        
        # TODO: Send email (configure SMTP settings)
        # For now, just logging. Add your email service below:
        """
        # Example with Gmail SMTP:
        smtp_server = "smtp.gmail.com"
        smtp_port = 587
        sender_email = os.getenv("SENDER_EMAIL")
        sender_password = os.getenv("SENDER_PASSWORD")
        
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = "your-email@example.com"
        msg['Subject'] = f"Portfolio Contact: {form.name}"
        
        body = f'''
        Name: {form.name}
        Email: {form.email}
        Phone: {form.phone or "Not provided"}
        
        Message:
        {form.message}
        '''
        
        msg.attach(MIMEText(body, 'plain'))
        
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.send_message(msg)
        """
        
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
