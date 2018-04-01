# Color game react typescript

Game color, here are ten screens, and on each screen, you are given a word and two buttons to choose from. Select the Color of the word, not the word!

This application is written in ReactJs, Typescript and Sass.

You can play it [here](https://color-game-react.herokuapp.com).

## Requeriments
 - NodeJS
 - Npm 5.6.0

## Setup
To install all dependencies

```
$ npm install
```

## Running
To running in dev server 

```
$ npm start
```
You can access in http://localhost:3000

## Build
Generate a distributable in dist folder
```
$ npm run build
```

## Test
To launch unit and integration test with coverage
```
$ npm test
```

## Functional tests
To setup funtional test (download/update chrome driver)
```
$ npm run e2e-setup
```
To launch functional test, launch app with npm start before and then
```
$ npm test-e2e
```

## Dependencies
### Develop
The application is written in React with typescript and Sass for style.
[React](https://reactjs.org/)
[Typescript](http://www.typescriptlang.org/)
[Sass](https://sass-lang.com/)
### Bundler
To bundle the app use Webpack
[Webpack](https://webpack.js.org/)
### Test
#### Unit and integration tes
Use Jest and enzyme
[Jest](https://facebook.github.io/jest/)
[Enzyme](http://airbnb.io/enzyme/)
### Funtional test
Use Protractor (modifying to react)
[Protractor](https://www.protractortest.org/#/)