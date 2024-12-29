import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let win: BrowserWindow | null;

function createWindow(): void {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Carrega a versão de desenvolvimento do Next.js
  win.loadURL('http://localhost:3000');

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
