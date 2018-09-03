const path = require('path');

module.exports = {
    presets: [
        '@babel/preset-react',
        '@babel/preset-env'
    ],
    plugins: [
        // Key plugin that adds the aliased imports to allow sharing
        ['module-resolver', {
            cwd: '..',
            alias: {
                // This line is necessary to ensure that the proper version of
                // react is imported by the shared code
                // This line is necessary to ensure that the shared code imports
                // the same version of react used by the react web project
                react: path.resolve(__dirname, 'node_modules/react'),
                shared: './shared',
                target: './web',
            },
        }],
    ],
};
