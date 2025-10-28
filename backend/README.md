# Portfolio Backend API

FastAPI backend for portfolio website contact form and other features.

## Setup

1. Create virtual environment:
```bash
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the server:
```bash
python main.py
```

Or with uvicorn:
```bash
uvicorn main:app --reload
```

The API will be available at: http://localhost:8000

## API Documentation

Once running, visit:
- API Docs (Swagger UI): http://localhost:8000/docs
- Alternative Docs (ReDoc): http://localhost:8000/redoc

## Endpoints

- `GET /` - Root endpoint
- `GET /health` - Health check
- `POST /api/contact` - Contact form submission

## Deployment

### Railway
1. Install Railway CLI: `npm i -g @railway/cli`
2. Login: `railway login`
3. Deploy: `railway up`

### Render
1. Create account at render.com
2. Connect your GitHub repo
3. Set build command: `pip install -r requirements.txt`
4. Set start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
