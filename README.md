# Metro Context Modules Demo

This is a demo of using the experimental 'Context Module' (`require.context`) feature in Metro bundler.

## Setup

`metro.config.js`

```js
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.transformer = {
  // `require.context` support
  unstable_allowRequireContext: true,
};

module.exports = config;
```

At the moment, you'll need to force the Metro versions in your `package.json`:

```json
{
  "resolutions": {
    "metro": "0.72.1",
    "metro-babel-transformer": "0.72.1",
    "metro-cache": "0.72.1",
    "metro-cache-key": "0.72.1",
    "metro-config": "0.72.1",
    "metro-core": "0.72.1",
    "metro-hermes-compiler": "0.72.1",
    "metro-minify-uglify": "0.72.1",
    "metro-react-native-babel-preset": "0.72.1",
    "metro-react-native-babel-transformer": "0.72.1",
    "metro-resolver": "0.72.1",
    "metro-source-map": "0.72.1",
    "metro-symbolicate": "0.72.1",
    "metro-transform-plugins": "0.72.1",
    "metro-transform-worker": "0.72.1"
  }
}
```

If you want to add TypeScript support to `require.context`, include the [`types/metroRequire.d.ts`](./types/metroRequire.d.ts), then extend the `tsconfig.json`:

```json
{
  "extends": "expo/tsconfig.base",
  "include": ["./types/metroRequire"]
}
```

## Usage

- Run `yarn start`
- Add files to the `app/` folder to see the UI update dynamically.

For more info, see the [Webpack docs on `require.context`](https://webpack.js.org/guides/dependency-management/#requirecontext).

```tsx
const ctx = require.context("./app");

const myModule = ctx[ctx.keys()[0]];
```
