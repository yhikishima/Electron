const app = require('app');
const BrowserWindow = require("browser-window");
const ROOT_PATH = `file://${__dirname}`;
const ipcMain = require("electron").ipcMain;

app.on('ready', e => {
  const mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL(`${ROOT_PATH}/index.html`);
});

app.on("window-all-closed", e => {
  app.quit();
});

ipcMain.on("click-my-button", (sender, e) => {
  console.log(e);
});

const count = (state, action) => {
  state = state || 0;
  switch(action.type) {
    case "COUNT_UP":
      return state + 1;
  }
  return state;
}

// const myStore = redux.createStore((state, action) => {
//   state = state || {};
//   return {count: count(state.count, action)};
// });

// const render = () => {
//   mainWindow.webContents.send("render", myStore.getState())
// };

// ipcMain.on("dispatch-store", (sender, e) => {
//   myStore.dispatch(e);
//   render();
// });

// mainWindow.webContents.on("dom-ready", render); // ← DOMの準備ができたら一度レンダリング