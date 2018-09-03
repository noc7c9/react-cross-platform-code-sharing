const path = require('path');

module.exports = {
    extraNodeModules: {
        // This line is necessary to ensure that the shared code imports the
        // same version of react used by the react native project
        react: path.resolve(__dirname, 'node_modules/react'),
    },
    getProjectRoots() {
        return [
            path.resolve(__dirname),
            // This line stops the react native bundler from complaining when
            // importing code outside the project root (ie. the shared code)
            path.resolve(__dirname, '..'),
        ];
    },
};
