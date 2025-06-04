@echo off
start cmd /k "cd %~dp0 && npm run dev:server"
start cmd /k "cd %~dp0 && npm run dev:client" 