# useGoogleTagManager

A simple Google Tag Manager wrapper in a React Hook style.

## Installation

Installation with NPM:

```bash
npm install useGTM
```

Installation with Yarn:

```bash
yarn add useGTM
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

const [gtmData, gtmEvent] = useGoogleTagManager('GTM-1234567', {dataLayerName: 'myDataLayer', auth: 'abc', env: 'dev'})
```

## Google Tag Manager information
The Google Tag Manager stores all variables and event in an object called dataLayer available in the global scope.

## About this library
Although the name pretends the library is not a real hook in terms of React. At least not all rules of hooks are met.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

### Development
```bash
yarn build
```

## License
[MIT](https://choosealicense.com/licenses/mit/)