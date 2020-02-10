// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const { rootDir, viewsDir } = require('./app.config')
require('electron-reload')(__dirname)

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 940,
    height: 600,
    'min-width': 940,
    'min-height': 494,
    webPreferences: {
      preload: './preload.js',
      nodeIntegration: true
    },
    backgroundColor: '#353535',
    frame: false, // remove the title bar,
    icon: '../cow-milk/public/favicon.ico' // icon for the app in the task bar
  })

  // and load the index.html of the app.
  mainWindow.loadFile(viewsDir + 'index.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
