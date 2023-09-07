# Dev Assignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Assumptions

- No backend is needed since we are using the DummyJsonAPI, this means we are restricted to their available
  endpoints. For that same reason we can only query the products endpoint by one criteria in this case the *FREE TEXT*
  search has priority over the *CATEGORY FILTER* 

## Installation

As usual just run `npm install` and once that is done you are able to use the app by
by running the ***npm start*** (bellow) script as usual.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run storybook`

This will start the storybook workshop where you can fiddle and try out some components without having to run 
the main project 

## Notes
- To trigger the search you need to press the ENTER key otherwise it will not work.
- There are some basic cypress tests (just to make sure the components mount correctly in the browser), this can
also be achieved by using the storybook workshop.

## TODO

- Because of the way MUI table works and the lack of time I was unable to implement the scroll detect for the infinite
scroll table. Given more time I would implement a table component from scratch or use a different component like MIU-X
Data Grid.
- Make the free text search be automatic after the user has done typing or as it types the texts
- Due to lack of time (ran out trying to fix some issues) there are no unit tests, if I had more time I would have
added unit tests for the ***DropdownFilter mapListToRequiredStructure*** function to make sure it always returns
the same output