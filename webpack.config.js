const path = require('path');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: './init',

    output: {
        filename: 'bundle',
        path:  path.resolve(__dirname, 'built'),
    },

    resolve: {
        extensions: ['.js']
    },

    watch: true
};