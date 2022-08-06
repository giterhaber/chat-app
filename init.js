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



//sign
const sign = () => {
  const win = new BrowserWindow({
        width: 390,
        height: 350,
        frame: false,
        fullscreenable: false,
        alwaysOnTop: true,
        show: false,
          webPreferences: {
          preload: path.join(__dirname, './preload.js')
          }

  });

  // win.webContents.setWindowOpenHandler(({ url }) => {
  //   if (url == 'https://cn.pornhub.com') {
  //     return {
  //       action: 'allow',
  //       overrideBrowserWindowOptions: {
  //         width: 390,
  //         height: 350,
  //         resizable: false,
  //         frame: false,
  //         fullscreenable: false,
  //         backgroundColor: black,
  //         alwaysOnTop: true,
  //         show: false,
  //         webPreferences: {
  //           preload: path.join(__dirname, './preload.js')
  //         }
  //       }
  //     }
  //   }
  //   return { action: 'allow'}
  // })


  // win.once('ready-to-show', () => {
  //   win.show()
  // })
  //win.webContents.openDevTools()
  win.loadFile('sign.html')
  win.setMenuBarVisibility(false)

}

app.whenReady().then(() => {
  sign()

  app.on('activate', function () {

    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// app.whenReady().then(() => {
//   const test = new BrowserWindow();
//   test.loadFile('tools.html').then(() => {
//     const currentURL = win.webContents.getURL()
//     console.log(currentURL);
//   })
// })

// app.whenReady().then(() => {
//   const wina = new BrowserWindow({ show: false })
// wina.once('ready-to-show', () => {
//   wina.show()
// })

// })

