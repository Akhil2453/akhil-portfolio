# npm install repair (Windows)

The original package lock was generated against a private build registry. This corrected package uses the public npm registry.

From PowerShell in the project directory:

```powershell
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
cmd /c "rmdir /s /q node_modules" 2>$null
npm config set registry https://registry.npmjs.org/
npm config get registry
npm cache verify
npm install
npm run dev
```

Expected registry output:

```text
https://registry.npmjs.org/
```

If Windows still reports `EPERM`, restart Windows, reopen PowerShell as Administrator, delete `node_modules`, and run the commands again.
