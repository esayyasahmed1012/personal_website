const path = require("path");

module.exports = {
    mode: 'development',
	entry: './src/index.js',
    output: {
        filename: 'bundle.js',
	path: path.resolve('./dist'),
	publicPath: '/'
    },
    module:{
        rules:[
            {
                test:/\.css/,
                use:['style-loader', 'css-loader']
    
            }, 
            {
                test:/\.(png|jpe?g|gif)$/i,
                use:[
                    'file-loader',
                    {
                        loader:'image-webapck-loader',
                        options:{
                            bypassOnDebug: true,
                            disable: true
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
        
    },
    resolve: {
        extensions: ['.js', '.jsx']
      },
    devtool: 'inline-source-map',
	devServer: {
		static: path.resolve('./dist'),
		compress: true,
		port: 8564,
	},
}
