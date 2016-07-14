# D3.js with angular_cli

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.9.
The main focus of this is to add 3rd party library d3.js with angular_cli.

# Used the following sites as reference:
1. https://github.com/angular/angular-cli/issues/999
2. https://github.com/angular/angular-cli/issues/785
3. https://embed.plnkr.co/qM3qrk3swvalQFBh1Db1/  (chart source)

## Quick Start
1. git clone https://github.com/daftster/d3angularcli.git
2. npm install
3. ng build
4. ng serve
(Please see below for instructions how to do it from scratch)

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/route/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Step by step Guide
1. npm install -g angular-cli  (1.0.0-beta.9 #atm)
2. ng new chart
3. go to chart directory
4. npm install d3@3.5.17 --save
5. typings install --save
6. Modify files accordingly. See ([Commit 2](https://github.com/daftster/d3angularcli/commit/9a5d22618d623b62b99243c346ae71f23131d4aa)) for file changes
