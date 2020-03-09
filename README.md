# useGoogleTagManager

A simple Google Tag Manager wrapper in a React Hook style.

## Installation

Installation with NPM:

```bash
npm install @zeekrey/useGTM
```

Installation with Yarn:

```bash
yarn add @zeekrey/useGTM
```

## Usage

The most basic usage:

```javascript
import useGoogleTagManager from "useGTM"

const [gtmData, gtmEvent] = useGoogleTagManager('GTM-1234567')

// To add a variable to Google Tag Manager use the gtmData function
gtmData({myVar: 'data'})

// To trigger a event use the gtmEvent function
gtmEvent('myEvent') 
```

For a more individual usage:

```javascript
import useGoogleTagManager from "useGTM"

const [gtmData, gtmEvent] = useGoogleTagManager('GTM-1234567', {dataLayerName: 'myDataLayerName'})
```

## Google Tag Manager information
The Google Tag Manager stores all variables and event in an object called dataLayer available in the global scope.

## About this library
Although the name pretends the library is not a real hook in terms of React. At least not all rules of hooks are met.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

### Development
Run test with
```bash
yarn test
```

or
```bash
yarn test --watch
```

To bundle everything up use

```bash
yarn build
```

We use the ESLint Convention for conventional commting and changelog: https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-eslint

Here is a quote from the ESLint documentation:

The Tag is one of the following:

Fix - for a bug fix.
Update - either for a backwards-compatible enhancement or for a rule change that adds reported problems.
New - implemented a new feature.
Breaking - for a backwards-incompatible enhancement or feature.
Docs - changes to documentation only.
Build - changes to build process only.
Upgrade - for a dependency upgrade.
Chore - for refactoring, adding tests, etc. (anything that isn't user-facing).
Use the labels of the issue you are working on to determine the best tag.

## License
[MIT](https://choosealicense.com/licenses/mit/)