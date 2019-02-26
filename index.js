const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 640, height: 480 });
  mainWindow.loadURL('file://' + __dirname + '/browser.html');
  // mainWindow.openDevTools();
});
