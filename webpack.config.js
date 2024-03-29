const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = () => {
    return {
        // モード値を production に設定すると最適化された状態で、
        // development に設定するとソースマップ有効でJSファイルが出力される
        mode: "development",
        stats: {
            children: true,
            errorDetails: true
        },

        // ES5(IE11等)向けの指定（webpack 5以上で必要）
        target: ["web", "es5"],

        // メインとなるJavaScriptファイル（エントリーポイント）
        entry: {
            // コンパイル対象のファイルを指定
            'index': path.resolve(__dirname, "./src/app/index.tsx"),
            'index.css': path.resolve(__dirname, './src/resources/scss/index.scss')
        },

        devServer: {
            port: 3001,
            // ここを設定しておかないと、直接手入力の際にcannot get ~~ が表示される
            historyApiFallback: true,
        },

        // ファイルの出力設定
        output: {
            path: __dirname + '/public',
            filename: 'build/[name].[contenthash].js'
        },

        module: {
            rules: [

                {
                    test: /\.(sa|sc|c)ss$/, // 対象にするファイルを指定
                    use: [
                        MiniCssExtractPlugin.loader, // JSとCSSを別々に出力する
                        'css-loader',
                        'postcss-loader', // オプションはpostcss.config.jsで指定
                        'sass-loader',
                    ]
                },
                {
                    test: /\.(jpg|png)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'img/'
                            }
                        }
                    ]
                },
                {
                    // 拡張子 .ts もしくは .tsx の場合
                    test: /\.tsx?$/,
                    // TypeScript をコンパイルする
                    use: "ts-loader"
                },
                {
                    test: /\.(js|jsx)$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/preset-env',
                                    '@babel/preset-react'
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts/'
                            }
                        }
                    ]
                },
            ]
        },
        // import 文で .ts や .tsx ファイルを解決するため
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"],
            modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')], 
        },

        plugins: [
            new Dotenv({
                systemvars: true
            }),
            new CleanWebpackPlugin({
                cleanAfterEveryBuildPatterns: ['public/build']
            }),
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                //これをつけないと、直接URL叩いた時404になる
                publicPath: '/'
            }),
            new RemoveEmptyScriptsPlugin(),
            new MiniCssExtractPlugin({
                filename: 'css/[name]'
            }),
        ],
        // node_modules を監視（watch）対象から除外
        watchOptions: {
            ignored: /node_modules/  //正規表現で指定
        }
    }
};