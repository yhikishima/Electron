const app = require('app');
const BrowserWindow = require("browser-window");
const ROOT_PATH = `file://${__dirname}`;

app.on('ready', e => {
  const mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL(`${ROOT_PATH}/index.html`);
});

app.on("window-all-closed", e => {
  app.quit();
});