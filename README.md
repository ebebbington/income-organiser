# Sample Electron App

This project demonstrates building a GUI application using Electron, written using JavaScript and HTML.

Electron is a a project that can be build using a few JavaScript files. It boils down to a `main.js` file using the Electron module to create a 'window', or rather an application. Where normal JavaScript and HTML can be used to display the UI and handle events.

# Directory Structure / Description

* `css/`

    * Holds our CSS modules

* `dist/`

    * Holds our distrubutable installers

* `installers/`

    * Holds our script to create the installer for windows

* `js/`

    * Holds our JS modules to handle events and functionality

* `releases/`

    * This is where our packaged applications go after we run `npm run package-*`.
    * This directory will hold the applications for Windows, MacOS or Linux

* `views/`

    * Contains our HTML files
    
* `debian.json`

   * Our config file for when we create the installer for linux

* `main.js`

    * The main entrypoint file. Responsible for creating the window (application) and handling any system events

* `preload.js`

    * Any actions to run as a 'pre-load' can reside here

* `renderer.js`

    * ?

# Tools Used

This is the list of all tools used here, which also act as the tools learnt, or tools implemented to learn:

* HTML

    * General mark-up

* CSS

    * General CSS

* JS

    * General JS

* Electron

    * General use

# Build, Start and Package

We use the `package.json` file to start the application locally, or package the application into executables for the different platforms.

It boils down to using electron to start the app or electron-packager to package it

**Build**

`npm run build`

**Start**

Run a local application without packaging

`npm run start`

**Package**

The packaged files will be placed in `/releases/<project-name>-<os>/`

`npm run package-[win|mac|linux]`

**Create Installers**

Make sure to run `npm run package-*` first.

This command will ceate an installer in `/dist/<os>/`

`npm run dist-[win|mac|linux]`

# Tests

## Writing the Tests

## Running the Tests

# Information

# Help

# TODO

* Better style the notification message

* Fix the issue of not being able to edit the input fields after clicking headers and so forth

* Add accessisiblity, use one of the electron tools to test this

* Backup the IO data into a json file so we aren't just relying on local storage

* Create an icon for the app and place it in the scripts for package.json, e.g. `packahe-mac: ... --icon=/path/to/icon

* add --icon=path option for dist-mac in package.json script

* cant create installer for linux because package `electron-installer-debian` requires host os to  be linux, refer to this post: https://www.christianengvall.se/electron-installer-debian-package/

* add icon for creating installer in debian.json: "icon": "assets/icons/png/1024x1024.png"
