const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const settings = {
    distPath: path.join(__dirname, "dist"),
    srcPath: path.join(__dirname, "src")
};


module.exports = (env, options) => {
    const isDevMode = options.mode === "development";

    return {
        devtool: isDevMode ? "source-map" : false,
        devServer: {
            hot: true,
            open: 'Google Chrome Canary',
            liveReload: true,
            port: 8081,
        },
        entry: './src/index.js',
        output: {
            path: path.resolve(process.cwd(), 'dist'),
        },
        resolve: {
            extensions: [".js"],
        },
        module: {
            
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                      loader: "babel-loader"
                    }
                },
                {
                    test: /\.html$/,
                    use: [
                      {
                        loader: "html-loader"
                      }
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: isDevMode
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: [
                                    require("autoprefixer")()
                                ],
                                sourceMap: isDevMode
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: isDevMode
                            }
                        }
                    ]
                },
                {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "fonts/[name].[ext]",
                        },
                    },
                },
                {
                    test: /\.(jpe?g|png|gif|svg|ico)$/i,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "assets/"
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            })
        ]
    };
};