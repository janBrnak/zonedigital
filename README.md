## Table of Contents

- [Overview](#overview)
- [Live Preview](#live-preview)
- [Create Project Locally](#create-project-locally)
- [Structure of Project](#structure-of-project)

### Overview
The goal of this repository is to finish task specified at https://github.com/zone/frontend/blob/master/challenges/movie-listings.md. The UI is build by library React and application state is handled by Redux. The application skeleton is build by React start kit `create-react-app`. I've been working mainly with Angular.js (1.5, 1.6) and Angular(5.x, 6.x) for the last two years but I choose React because you are using it and also it was a nice challenge. I hope you will like my solution. Definitely, there is a lot of space for improvements like styling or unit testing but this is all, what I've been able to finish for today. I also promised that I finish the task by Monday.

### Live Preview
The dev version of the application is possible to see https://zonedigital.herokuapp.com/. In my Heroku account is created auto deploy from GitHub master branch. It means everytime I merge `merge request` to master branch application is re-deployed.

### Create Project Locally
1.) Git clone repository `git clone https://github.com/janBrnak/zonedigital zonedigital`
2.) Open folder `zonedigital`
3.) Run script `yarn install`
4.) Run script `yarn start`
5.) Open http://localhost:3000 to view it in the browser

### Structure of Project
Everything starts in the `index.js` file, where is imported root App component, created redux store and dispatched two actions to fetch data from TMDb. The `App.js` is only one stateful component where I work with application state and use function connect to add state to applications.
The `src` folder contains two subfloders:
- `components` folder contains all stateless componets imported by `App.js`
- `store` folder contains all actions, reducers and mapHelps.js file

```
zonedigital/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    /components
        /filterByGenres
        /filterByVoteAverage
        /movieItems
        /movies
    /store
        /actions
        /reducers
        api.js
        mapHelper.js
    App.css
    App.js
    App.test.js
    index.js
    logo.svg
```