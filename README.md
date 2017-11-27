# fable-pixi-template

A Fable Pixi template.

## Installing the template

* Install the template: `dotnet install -i Fable.Template.Pixi`

## Creating a new app

Once the template has been installed, you can use it to create a new Fable Pixi application:

* Create the app:  `dotnet new fable-pixi -n MyCoolProject`

## Building and running the app

* Move to the project's root directory: `cd MyCoolProject`
* Install JS dependencies: `yarn install`
* Move to `src` folder: `cd src`
* Install F# dependencies: `dotnet restore`
* Start Fable daemon and [Webpack](https://webpack.js.org/) dev server: `dotnet fable yarn-start`
* In your browser, open: http://localhost:8080/
