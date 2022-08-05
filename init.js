const { app, BrowserWindow } = require('electron');


const createWindow = () => {
  const win = new BrowserWindow({
    width: 463,
    height: 600,
    resizable: false,
    autoHideMenuBar: true,
    webPreferences: {
      devTools: false
    }
  })


  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

