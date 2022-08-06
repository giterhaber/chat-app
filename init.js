const { app, BrowserWindow, Menu } = require('electron');

const path = require('path')

Menu.setApplicationMenu(false)

const createWindow = () => {
  const win = new BrowserWindow({
    x: 0,
    y: 1,
    width: 350,
    height: 600,
    resizable: false,
    alwaysOnTop: true,
    frame: true,
    transparent: false,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, './preload.js')
    }
    
  })
  const child = new BrowserWindow({
    center: true,
    parent: win, 
    modal: true,
    width: 200,
    height: 170,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, './preload.js')
    }
  })

  child.once('ready-to-show', () => {
    child.show()
  })

  child.loadFile('status.html')

//
  win.once('ready-to-show', () => {
    win.show()

  })

  //win.webContents.openDevTools()

  win.loadFile('index.html')
  // win.setMenuBarVisibility(false)
}


//ready
app.whenReady().then(() => {
  createWindow()

})
