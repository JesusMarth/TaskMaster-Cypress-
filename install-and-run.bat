@echo off
echo ========================================
echo    INSTALADOR AUTOMATICO TASKMASTER
echo ========================================
echo.

echo [1/4] Limpiando instalaciones anteriores...
cd taskmaster-app
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
cd ..

cd taskmaster-tests
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
cd ..

echo [2/4] Instalando dependencias de la aplicacion React...
cd taskmaster-app
call npm install
if %errorlevel% neq 0 (
    echo ERROR: No se pudieron instalar las dependencias de React
    pause
    exit /b 1
)
cd ..

echo [3/4] Instalando dependencias de Cypress...
cd taskmaster-tests
call npm install
if %errorlevel% neq 0 (
    echo ERROR: No se pudieron instalar las dependencias de Cypress
    pause
    exit /b 1
)
cd ..

echo [4/4] Iniciando la aplicacion React...
cd taskmaster-app
start "TaskMaster React App" cmd /k "npm start"

echo.
echo ========================================
echo    INSTALACION COMPLETADA
echo ========================================
echo.
echo La aplicacion React se esta iniciando...
echo Espera unos segundos y luego abre:
echo http://localhost:3000
echo.
echo Para ejecutar los tests Cypress:
echo 1. Abre una nueva terminal
echo 2. Ejecuta: cd taskmaster-tests
echo 3. Ejecuta: npm run cypress:open
echo.
pause 