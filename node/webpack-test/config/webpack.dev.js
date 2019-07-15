const path = require("path")

module.exports = {
    entry: {
        main: './src/main.js'
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    devServer: {
        contentBase: "dist",
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader" //it runs fist than style-loader inject css if sees it
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].html"
                        }
                    },{
                        loader: "extract-loader"                        
                    },{
                        loader: "html-loader"
                    }
                ]
            }
        ]
    }
}