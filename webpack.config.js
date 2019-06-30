const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
    devServer: {
        contentBase: path.join(__dirname, '/'),
        port: 9000
    },
	module: {
		rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/react',
                            {
                                'plugins': ['@babel/plugin-proposal-class-properties']
                            }
                        ]
                    }
                }
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: {
                    loader: 'eslint-loader',
                    options: {
                        configFile: path.join(__dirname, '/.eslintrc'),
                        formatter: require('eslint/lib/cli-engine/formatters/stylish'),
                    },
                }
            },
		]
	}
};