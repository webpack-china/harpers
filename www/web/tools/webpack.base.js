'use strict';

const path = require('path'),
      os = require('os'),
      utils = require('steamer-webpack-utils'),
      webpack = require('webpack');

var config = require('../config/project'),
    configWebpack = config.webpack,
    env = process.env.NODE_ENV,
    isProduction = env === 'production';

var Clean = require('clean-webpack-plugin'),
    CopyWebpackPlugin = require("copy-webpack-plugin-hash"),
    SpritesmithPlugin = require('webpack-spritesmith'),
    WebpackMd5Hash = require('webpack-md5-hash'),
    UglifyJsParallelPlugin = require('webpack-uglify-parallel'),
    StylelintWebpackPlugin = require('stylelint-webpack-plugin'),
    HtmlResWebpackPlugin = require('html-res-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HappyPack = require('happypack');

var baseConfig = {
    context: configWebpack.path.src,
    entry: configWebpack.entry,
    output: {
        publicPath: isProduction ? configWebpack.cdn : configWebpack.webserver,
        path: path.join(configWebpack.path.dist, configWebpack.path.distCdn), //isProduction ? path.join(configWebpack.path.dist, configWebpack.path.distCdn) : configWebpack.path.dev,
        filename: configWebpack.chunkhashName + ".js",
        chunkFilename: "chunk/" + configWebpack.chunkhashName + ".js",
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: "pre",
                include: configWebpack.path.src
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: 'vue-style-loader!css-loader!postcss-loader',
                        less: 'vue-style-loader!css-loader!postcss-loader!less-loader',
                    }
                },
                exclude: /node_modules/
            },
            { 
                test: /\.js$/,
                loader: 'happypack/loader?id=1',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                // 单独抽出样式文件
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader', 
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                localIdentName: '[name]-[local]-[hash:base64:5]',
                                root: configWebpack.path.src,
                                module: configWebpack.cssModule
                            }
                        },
                        { loader: 'postcss-loader' },
                    ]
                }),
                include: path.resolve(configWebpack.path.src)
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader', 
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                localIdentName: '[name]-[local]-[hash:base64:5]',
                                module: configWebpack.cssModule
                            }
                        },
                        { loader: 'postcss-loader' },
                        {
                            loader:  'less-loader',
                            options: {
                                paths: [
                                    configWebpack.path.src,
                                    "node_modules"
                                ]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.handlebars$/, 
                loader: "handlebars-loader" 
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "url-loader",
                options: {
                    limit: 1000,
                    name: "img/[path]/" + configWebpack.hashName + ".[ext]"
                },
            },
            {
                test: /\.ico$/,
                loader: "url-loader",
                options: {
                    name: "[name].[ext]"
                },
            },
        ],
    },
    resolve: {
        modules: [
            configWebpack.path.src,
            "node_modules",
            path.join(configWebpack.path.src, "css/sprites")
        ],
        extensions: [".js", ".jsx", ".css", ".less", ".png", ".jpg", ".jpeg", ".ico", ".handlebars", "swf"],
        alias: {
            'utils': path.join(configWebpack.path.src, '/js/common/utils'),
        }
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename:  (getPath) => {
              return getPath('css/' + configWebpack.contenthashName + '.css').replace('css/js', 'css');
            },
            allChunks: false,
            disable: (isProduction || !configWebpack.extractCss) ? false : true,
        }),
        new HappyPack({
            id: '1',
            verbose: false,
            loaders: [{
                path: 'babel-loader',
                options: {
                    cacheDirectory: './.webpack_cache/',
                    presets: [
                        ["es2015", {"loose": true}],
                    ]
                },
            }],
        }),
        new StylelintWebpackPlugin({
            configFile: 'stylelintrc.js',
            context: 'inherits from webpack',
            files: '../src/**/*.@(?(s)?(a|c)ss|vue|html)',
            failOnError: false,
            lintDirtyModulesOnly: true,                 // 只在改变的时候lint，其他时候跳过
            extractStyleTagsFromHtml: true,
        }),
    ],
    watch: isProduction ? false : true,
    devtool: isProduction ? configWebpack.sourceMap.production : configWebpack.sourceMap.development
};

if (isProduction) {
    baseConfig.plugins.push(new webpack.DefinePlugin(configWebpack.injectVar));
    baseConfig.plugins.push(new WebpackMd5Hash());

    if (configWebpack.compress) {
        baseConfig.plugins.push(new UglifyJsParallelPlugin({
            workers: os.cpus().length, // usually having as many workers as cpu cores gives good results 
            // other uglify options 
            compress: {
                warnings: false,
            },
            output: {
                semicolons: false               // 去掉分号，保留行数
            }
        }));
    }
}
else {
    baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (configWebpack.clean) {
    baseConfig.plugins.push(new Clean([isProduction ? configWebpack.path.dist : configWebpack.path.dev], {root: path.resolve()}));
}

configWebpack.html.forEach(function(page, key) {
    baseConfig.plugins.push(new HtmlResWebpackPlugin({
        mode: "html",
        filename: configWebpack.path.distWebserver + "/" + page.key + ".html", //isProduction ? (config.webpack.path.distWebserver + "/" + page.key + ".html") : page.key + ".html",
        template: page.path,
        favicon: "www/web/src/favicon.ico",
        htmlMinify: null,
        entryLog: !key ? true : false,
        templateContent: function(tpl) {
            return tpl;
        }
    }));
}); 

configWebpack.static.forEach((item) => {
    baseConfig.plugins.push(new CopyWebpackPlugin([{
        from: item.src,
        to: (item.dist || item.src) + (item.hash ? configWebpack.hashName : "[name]") + '.[ext]'
    }]));
});

configWebpack.sprites = (configWebpack.spriteMode === "none") ? [] : configWebpack.sprites;

configWebpack.sprites.forEach(function(sprites) {
    let style = configWebpack.spriteStyle,
        spriteMode = configWebpack.spriteMode,
        retinaTpl = (spriteMode === "retinaonly")? "_retinaonly" : "";

    let spritesConfig = {
        src: {
            cwd: sprites.path,
            glob: '*.png'
        },
        target: {
            image: path.join(configWebpack.path.src, "css/sprites/" + sprites.key + ".png"),
            css: path.join(configWebpack.path.src, "css/sprites/" + sprites.key + ".less"),
        },
        spritesmithOptions: {
            padding: 10
        },
        apiOptions: {
            cssImageRef: "~" + sprites.key + ".png"
        }
    };

    if (spriteMode === "retinaonly") {
        spritesConfig.customTemplates = {
            [style]: path.join(__dirname, '../tools/', './sprite-template/' + style + retinaTpl + '.template.handlebars')
        };
    }
    else {
        spritesConfig.cssTemplate = style + retinaTpl + ".template.handlebars";
    }

    if (spriteMode === "retina") {
        spritesConfig.retina = "@2x";
    }

    baseConfig.plugins.push(new SpritesmithPlugin(spritesConfig));
});

module.exports = baseConfig;
