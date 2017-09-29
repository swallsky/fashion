/**
 *
 * @type {{entry: string, output: {path: *, filename: string}, module: {loaders: [*]}}}
 */
module.exports = {
    entry: {
        let:'./src/let.js'
    },
    output: {
        path: __dirname,
        filename: './bin/[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}