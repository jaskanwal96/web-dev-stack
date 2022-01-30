# web-dev-stack


## Commands Used

1. npx babel index.js --presets "@babel/preset-env" > resultant.js --> To convert to es5
2. npx webpack --config webpack.config.js --mode=development   
    ```js
    module.exports = {
        entry: "./index.js",
        target: ["web", "es5"],
        module: {
            rules:  [
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                }
            ]
        }
    }
    ```