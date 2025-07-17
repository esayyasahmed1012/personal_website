const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV || 'development', // Use environment variable for mode
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'), // Adjusted to ensure dist is in root
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader', // Fixed typo
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map', // Optimize for production
    devServer: {
        static: path.resolve(__dirname, '../dist'),
        compress: true,
        port: 8564,
    },
};