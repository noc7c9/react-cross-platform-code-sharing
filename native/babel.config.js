module.exports = {
    presets: [
        'react-native',
    ],
    plugins: [
        ['module-resolver', {
            cwd: '..',
            alias: {
                shared: './shared',
                target: './native',
            },
        }],
    ],
};
