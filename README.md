# React - Advanced Examples

React tutorials may cover only some of the common hooks used by functional components. They describe its shadow DOM and how to create the webpages, but not always in the most efficient manner. Even the official React documentation does not show optimal examples for the sake of simplicity.

The examples in this project will show how to bring advanced hooks together to build with efficiency in mind.

## Prequisite Knowledge

### React

You will need some basic knowledge of React from one of the many tutorials found online. The following functional component hooks are used in these examples:

-   [useState](https://react.dev/reference/react/useState)
    -   [useState - Parameters](https://react.dev/reference/react/useState#setstate-parameters) - Take note of the `nextState`'s ability to evaluate values when it's passed a function.
-   [useCallback](https://react.dev/reference/react/useCallback)
-   [useRef](https://react.dev/reference/react/useRef)
-   [useReducer](https://react.dev/reference/react/useReducer)

### JavaScript

-   [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) - Used to copy an array or structure to a completely new structure.

### TypeScript

These examples make use of a light amount of TypeScript. This is why their file suffixes are `.tsx` rather than `.jsx`. This cheatsheet is a terrific resource for finding basic types and interfaces used by React.

-   [React/TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/)
-   [Official TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## How To Run

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
