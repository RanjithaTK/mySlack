//electron is for building desktop applications

const { app, BrowserWindow } = require("electron") //to open webpage in browser window we need 2 modules
const isDev = require("electron-is-dev") //The app module, which controls your application's event lifecycle.
// The BrowserWindow module, which creates and manages application windows.
const path = require("path")

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
  })
  const startURL = isDev // allows to debug  code during development. It can be used in the main and rendered process.
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../build/index.html")}` //running theapp

  mainWindow.loadURL(startURL)
  mainWindow.once("ready-to-show", () => mainWindow.show())
  mainWindow.on("closed", () => {
    mainWindow = null
  })
}
app.on("ready", createWindow) //event listener eventhandler
//when the app is ready creates the window
