import path from 'path'

export default {
    entry: path.resolve('src', 'client', 'js'),
    output: {
        path: path.join(__dirname, '..', 'src', 'client', 'js'),
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
