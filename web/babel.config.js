const path = require('path');

module.exports = {
    presets: [
        '@babel/preset-react',
        '@babel/preset-env'
    ],
    plugins: [
        ['module-resolver', {
            cwd: '..',
            alias: {
                react: path.resolve(__dirname, 'node_modules/react'),
                shared: './shared',
                target: './web',
            },
        }],
    ],
};
