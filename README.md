# FablePixiTemplate

A Fable Pixi template.

## Installing the template

This template is currently available as a filesystem template.  To install:

* Clone the template to your filesystem: `git clone https://github.com/inchingforward/fable-pixi-template.git`
* Install the template: `dotnet install -i ./fable-pixi-template/`

## Creating a new app

Once the template has been installed, you can use it to create a new Fable Pixi application:

* Create the app:  `dotnet new fable-pixi MyCoolProject`

## Building and running the app

* Install JS dependencies: `yarn install`
* Move to `src` folder: `cd src`
* Install F# dependencies: `dotnet restore`
* Start Fable daemon and [Webpack](https://webpack.js.org/) dev server: `dotnet fable yarn-start`
* In your browser, open: http://localhost:8080/
