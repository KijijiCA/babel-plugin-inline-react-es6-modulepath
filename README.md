# babel-plugin-inline-react-es6-modulepath [![Build Status](https://travis-ci.org/KijijiCA/babel-plugin-inline-react-es6-modulepath.svg?branch=master)](https://travis-ci.org/KijijiCA/babel-plugin-inline-react-es6-modulepath)

Add `modulePath` to React components instantiated in ES6 style inheriting from React.Component (ex: `class ComponentName extends React.Component` or `class ComponentName extends React.Component`).

`modulePath` represents the modules location on the filesystem. Good as an alternative to React `displayName`, when name collisions are likely.

## Installation

```sh
$ npm install babel-plugin-transform-react-es6-displayname
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```js
{
  "plugins": ["transform-react-es6-displayname"]
}
```

or with options:

```js
{
  "plugins": [
        ["transform-react-es6-displayname", {stripCwd: true, stripExtension: true}]
    ]
}
```

### Via CLI

```sh
$ babel --plugins transform-react-es6-displayname script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-react-es6-displayname"]
});
```

## Options
- `stripCwd` [boolean] - Whether to strip current working folder from `modulePath` (cwd is from `process.cwd()`)
- `stripExtension` [boolean] - Whether to strip extensions from `modulePath`

## Development

Read babel plugin handbook -> https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md

### Tests
To run tests, run `npm test` or `npm test watch`
