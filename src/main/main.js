const { app, BrowserWindow } = require('electron');
const path = require('path');


function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		frame: false,
		roundedCorners: true,
		webPreferences: {
			preload: path.join(__dirname, "../preload/preload.js")
		}
	})

	win.loadFile('src/render/index.html')
	win.webContents.openDevTools({mode: "detach"})
}

app.whenReady().then(() => {
	createWindow()

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
	})
})


app.on('window-all-closed', () => {
	if (process.platform !== "darwin") {
		app.quit()
	}
})


