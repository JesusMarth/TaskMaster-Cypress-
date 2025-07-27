Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   INSTALADOR AUTOMATICO TASKMASTER" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/4] Limpiando instalaciones anteriores..." -ForegroundColor Yellow
Set-Location "taskmaster-app"
if (Test-Path "node_modules") { Remove-Item -Recurse -Force "node_modules" }
if (Test-Path "package-lock.json") { Remove-Item "package-lock.json" }
Set-Location ".."

Set-Location "taskmaster-tests"
if (Test-Path "node_modules") { Remove-Item -Recurse -Force "node_modules" }
if (Test-Path "package-lock.json") { Remove-Item "package-lock.json" }
Set-Location ".."

Write-Host "[2/4] Instalando dependencias de la aplicacion React..." -ForegroundColor Yellow
Set-Location "taskmaster-app"
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: No se pudieron instalar las dependencias de React" -ForegroundColor Red
    Read-Host "Presiona Enter para continuar"
    exit 1
}
Set-Location ".."

Write-Host "[3/4] Instalando dependencias de Cypress..." -ForegroundColor Yellow
Set-Location "taskmaster-tests"
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: No se pudieron instalar las dependencias de Cypress" -ForegroundColor Red
    Read-Host "Presiona Enter para continuar"
    exit 1
}
Set-Location ".."

Write-Host "[4/4] Iniciando la aplicacion React..." -ForegroundColor Yellow
Set-Location "taskmaster-app"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm start" -WindowStyle Normal

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "    INSTALACION COMPLETADA" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "La aplicacion React se esta iniciando..." -ForegroundColor White
Write-Host "Espera unos segundos y luego abre:" -ForegroundColor White
Write-Host "http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Para ejecutar los tests Cypress:" -ForegroundColor White
Write-Host "1. Abre una nueva terminal" -ForegroundColor White
Write-Host "2. Ejecuta: cd taskmaster-tests" -ForegroundColor White
Write-Host "3. Ejecuta: npm run cypress:open" -ForegroundColor White
Write-Host ""
Read-Host "Presiona Enter para continuar" 