# movie-search

**URL: https://jz-movie-search.herokuapp.com**

This is the simple movie search front-end only app, that uses OMDB API for providing data.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## TODO

This app is not complete! Below is the list of changes to be implemented.

### Technical:
- [ ] design consultancy with actual designer ;)
- [ ] better CSS implementation - possibly with less/sass, flexbox layoyt - needs CSS expert (I ain't one)
- [ ] all React components should have their propTypes defined. Sample: `SearchForm.js`
- [ ] unit tests for React components. Sample: `App.test.js`
- [x] unit tests for JS utils. Sample: `parseSearch.test.js`
- [ ] API key should not be hardcoded - should be injected from env variable during code compilation by webpack

### Features:
- [ ] search query should be included in the URL after `#` - allowing linking directly to search results
- [ ] click on the movie in search result should open a movie view with its details, URL should change accordingly (using React Router)
- [ ] for consideration: year selector as a separate form field OR displaying a hint how to search movie titles with year in them (using doublequotes)

## Available Scripts

In the project directory, you can run:

### `PORT=[yourport] yarn start`

Runs the app in production mode. `PORT` env variable is required. Make sure to run `yarn build` for preparing production build before starting the app in production mode.

### `yarn start:dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
