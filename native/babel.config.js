module.exports = {
    presets: [
        'react-native',
    ],
    plugins: [
        // Key plugin that adds the aliased imports to allow sharing
        ['module-resolver', {
            cwd: '..',
            alias: {
                shared: './shared',
                target: './native',
            },
        }],
    ],
};
