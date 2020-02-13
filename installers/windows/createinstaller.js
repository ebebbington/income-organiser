const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  return Promise.resolve({
    appDirectory: './releases/Income Organiser-win32-x64',
    authors: 'Edward Bebbington',
    noMsi: true,
    outputDirectory: './dist/windows',
    exe: 'Income Organiser.exe',
    setupExe: 'Setup.exe',
    // todo :: linkk to setup icon
    //setupIcon: path.join(rootPath, 'assets', 'icons', 'win', 'icon.ico')
  })
}