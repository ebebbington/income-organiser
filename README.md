# Sample Electron App

This project demonstrates building a GUI application using Electron, written using JavaScript and HTML.

Electron is a a project that can be build using a few JavaScript files. It boils down to a `main.js` file using the Electron module to create a 'window', or rather an application. Where normal JavaScript and HTML can be used to display the UI and handle events.

# Directory Structure / Description

* `css/`

    * Holds our CSS modules

* `js/`

    * Holds our JS modules to handle events and functionality

* `releases/`

    * This is where our packaged applications go after we run `npm run package-*`.
    * This directory will hold the applications for Windows, MacOS or Linux

* `views/`

    * Contains our HTML files

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

**Start**

Run a local application without packaging

`npm run start`

**Package**

The packaged files will be placed in `/releases/<project-name>-<os>/`

`npm run package-[win|mac|linux]`

# Tests

## Writing the Tests

## Running the Tests

# Information

# Help

# TODO

* Better style the notification message

* Fix the issue of not being able to edit the input fields after clicking headers and so forth

* Add accessisiblity, use one of the electron tools to test this