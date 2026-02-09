const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const babelLoaderExcludeNodeModulesExcept = require('babel-loader-exclude-node-modules-except');

const extractSass = new MiniCssExtractPlugin({
    filename: "css/[name].css"
});

const copyImages = new CopyWebpackPlugin({
    patterns: [
        {
            from: 'src/img',
            to: 'img'
        }
    ]
});

const config = {
    entry: {
        index: [ "./src/js/index.ts" ],
        editor: [ "./src/js/editor.ts" ],
        print:["./src/scss/print.scss"]
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.hbs', '.vue'],
        alias: {
            vue$: "vue/dist/vue.esm.js"
        }
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.js$/,
                exclude: babelLoaderExcludeNodeModulesExcept([
                    "micromodal",
                    "@vimeo/player"
                ]),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [require.resolve("@babel/preset-env"), {
                                "targets": {
                                    browsers: ['last 2 versions'],
                                    node: '14'
                                },
                                modules: false
                            }]
                        ],
                        plugins: [
                            require.resolve("@babel/plugin-transform-optional-chaining"),
                            require.resolve("@babel/plugin-transform-nullish-coalescing-operator")
                        ]
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'postcss-loader', 
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                includePaths: [
                                    path.resolve(__dirname, 'node_modules'),
                                    path.resolve(__dirname, 'src')
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: '[name].[ext]',
                    outputPath: 'fonts/',
                    publicPath: '../fonts/'
                },
                exclude: [path.resolve(__dirname, 'img')]
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: '[name].[ext]',
                    outputPath: 'img/',
                    publicPath: '../'
                },
                exclude: [path.resolve(__dirname, 'fonts')]
            },
            {
                test: /\.(hbs|handlebars)$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJSPlugin()
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        extractSass,
        copyImages
    ]
};

if (process.env.NODE_ENV === 'development') {

    config.devServer = {
        hot: true,
        publicPath: '/build/'
    };

    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}

module.exports = config;