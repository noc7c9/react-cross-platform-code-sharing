# React Cross-Platform Code Sharing Example
An example of how to share code between separate React Web and React Native sub-projects.
The example is rather contrived but demonstrates how to import the same module from both react and react native.
As well as how to import code from either of the sub-projects from the shared code.

Does not rely on symlinks or local npm modules.

Based on [this talk](https://www.youtube.com/watch?v=kZGaWefWVBs).

## How does it work?
The technique relies on [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)
to create two aliases:
- `shared` which points to the shared code
- `target` which points to either the web or native modules depending on which is being built.

The important files are the `babel.config.js` files in both sub-projects
which contain the configuration for babel-plugin-module-resolver.

[web/babel.config.js](web/babel.config.js)
AND
[native/babel.config.js](native/babel.config.js)
```js
module.exports = {
    ...
    plugins: [
        ['module-resolver', {
            cwd: '..',
            alias: {
                // The alias definitions
                shared: './shared',
                target: './native',
            },
        }],
    ],
};
```

Another important file is the `rn-cli.config.js` which allows React Native to build external files properly.

[native/rn-cli.config.js](native/rn-cli.config.js)
```js
module.exports = {
    ...
    getProjectRoots() {
        return [
            path.resolve(__dirname),
            path.resolve(__dirname, '..'), // Required to import code from the shared folder
        ];
    },
};
```

## Where do I put dependencies?
There are four possible locations to install dependencies.
- In the web sub-project for web specific dependencies
- In the native sub-project for native specific dependencies
- In the project root for dependencies shared between both sub-projects
  - In this repository, I've used `moment.js` as an example of this kind of dependency.
- In the shared folder for dependencies used only by the shared code
  - Note: there is no example of this in this repository.
