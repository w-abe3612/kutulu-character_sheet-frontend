const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",

    // ES5(IE11等)向けの指定（webpack 5以上で必要）
    target: ["web", "es5"],

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: {
        // コンパイル対象のファイルを指定
       'index': path.resolve(__dirname, "./src/app/index.tsx"),
       'index.css': path.resolve(__dirname, './src/scss/index.scss')
   },

    // ファイルの出力設定
    output: {
        path: __dirname + '/public',
        filename: 'build/[name].[contenthash].js'
    },

    module: {
        rules: [
            {
                // 拡張子 .ts もしくは .tsx の場合
                test: /\.tsx?$/,
                // TypeScript をコンパイルする
                use: "ts-loader"
            },
            {
                test: /\.(sa|sc|c)ss$/, // 対象にするファイルを指定
                use: [
                    MiniCssExtractPlugin.loader, // JSとCSSを別々に出力する
                    'css-loader',
                    'postcss-loader', // オプションはpostcss.config.jsで指定
                    'sass-loader',
                    // 下から順にコンパイル処理が実行されるので、記入順序に注意
                ]
            },
        ]
    },
    // import 文で .ts や .tsx ファイルを解決するため
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['public/build']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new RemoveEmptyScriptsPlugin(),
        new MiniCssExtractPlugin({ // CSSの出力先
            filename: 'css/[name]'// 出力ファイル名を相対パスで指定（[name]にはentry:で指定したキーが入る）
        }),
    ],
    // node_modules を監視（watch）対象から除外
    watchOptions: {
        ignored: /node_modules/  //正規表現で指定
    }
};