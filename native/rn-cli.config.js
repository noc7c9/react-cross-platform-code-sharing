const path = require('path');

const resolveModule = module => path.resolve(__dirname, 'node_modules', module);

module.exports = {
    extraNodeModules: {
        react: resolveModule('react'),
    },
    getProjectRoots() {
        return [
            path.resolve(__dirname),
            path.resolve(__dirname, '..'),
        ];
    },
};
