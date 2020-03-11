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

Here is what you can do if you want to check if Google Tag Manager works properly or if you want to view all activities:

[Post at Analytics mania](https://www.analyticsmania.com/post/how-to-check-if-google-tag-manager-is-working/)

In Short: If you use Google Chrome, use this [Extension](https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk). Otherwise look the source code of your page and check if you can find you GTM-Code somewhere. Or use the [Google Tag Manager preview mode](https://support.google.com/tagmanager/answer/6107056).

## About this library
Although the name pretends the library is not a real [hook](https://reactjs.org/docs/hooks-rules.html) in terms of React. It actually just uses the naming convention.

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
yarn test:watch
```

To bundle everything up use

```bash
yarn build
```

We use the Atom convention for conventional commiting and changelog: https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-atom

## License
[MIT](https://choosealicense.com/licenses/mit/)