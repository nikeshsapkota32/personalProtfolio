# Development Start Script
# Run both backend and frontend

Write-Host "Starting Portfolio Development Environment..." -ForegroundColor Green

# Start Backend
Write-Host "`nStarting Python Backend on http://localhost:8000..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\backend'; .\venv\Scripts\Activate.ps1; Write-Host 'Backend Running!' -ForegroundColor Green; uvicorn main:app --reload --host 0.0.0.0 --port 8000"

# Wait a bit for backend to start
Start-Sleep -Seconds 3

# Start Frontend
Write-Host "Starting Next.js Frontend on http://localhost:3000..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot'; Write-Host 'Frontend Running!' -ForegroundColor Green; npm run dev"

Write-Host "`n✅ Development servers starting!" -ForegroundColor Green
Write-Host "   Backend:  http://localhost:8000/docs" -ForegroundColor Yellow
Write-Host "   Frontend: http://localhost:3000" -ForegroundColor Yellow
Write-Host "`nPress Ctrl+C in each window to stop servers" -ForegroundColor Gray
