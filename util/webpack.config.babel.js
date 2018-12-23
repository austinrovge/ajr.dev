import path from 'path'

export default {
    entry: path.resolve('src', 'js'),
    output: {
        path: path.join(__dirname, '..', 'src', 'js'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}
