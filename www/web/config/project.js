'use strict';

const path = require('path'),
      os = require('os'),
      webpack = require('webpack'),
      utils = require('steamer-webpack-utils'),
      __basename = path.dirname(__dirname),
      __env = process.env.NODE_ENV,
      isProduction = __env === 'production';

var srcPath = path.resolve(__basename, "src"),
    devPath = path.resolve(__basename, "../static"),
    distPath = path.resolve(__basename, "../static"),
    spritePath = path.resolve(__basename, "src/img/sprites");

var hash = "[hash:6]",
    chunkhash = "[chunkhash:6]",
    contenthash = "[contenthash:6]";

var HtmlResWebpackPlugin = require('html-res-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HappyPack = require('happypack');

// ========================= webpack快捷配置 =========================
// 基本情况下，你只需要关注这里的配置
var config = {
    // ========================= webpack环境配置 =========================
    env: __env,

    webpack: {

        // ========================= webpack路径与url =========================
        // 项目路径
        path: {
            src: srcPath,
            dev: devPath,
            dist: distPath,
            sprite: spritePath,
            distCdn: "/", // 生成cdn的目录，dist/cdn
            distWebserver: "../../view/home"//"./" // 生成webserver的目录, dist/webserver， 目录相对于 distCdn
        },

        // ========================= webpack服务器及路由配置 =========================
        // 开发服务器配置
        "webserver": "/static/",            // 自定线上 webserver 路径
        "cdn": "/static/",                  // 自定 cdn 路径
        "port": "9000",                                         // 本地 port
        "route": "/static/",    

        // ========================= webpack自定义配置 =========================
        // 是否清理生成文件夹
        clean: true,
        // sourcemap
        sourceMap: {
            development: "inline-source-map",
            production: false,
        },

        // 支持的样式loader，css, less 或 stylus
        style: [
            "css", "less", "stylus", "sass"
        ],
        // 生产环境是否提取css
        extractCss: true,
        // 是否启用css模块化
        cssModule: false,

        // 合图，none (无合图), normal (仅1倍图) , retinaonly (仅2倍图), retina (包括1倍及2倍图)
        spriteMode: "none",
        // less, stylus, sass, scss
        spriteStyle: "sass",

        // html模板
        template: [
            "html", "pug", "handlebars"
        ],

        // 生产环境下资源是否压缩
        compress: true,

        // 不经webpack打包的资源
        static: [
            {
                src: "libs/",
                hash: true,
            }
        ],

        // 利用DefinePlugin给应用注入变量
        injectVar: {
            "process.env": {
                NODE_ENV: JSON.stringify(__env)
            }
        },

        // webpack resolve.alias 包别名
        alias: {
            'utils': path.join(srcPath, '/js/common/utils'),
            'sutils': 'steamer-browserutils/index',
        },

        // 文件名与哈希, hash, chunkhash, contenthash 与webpack的哈希配置对应
        hash: hash,
        chunkhash: chunkhash,
        contenthash: contenthash,
        hashName: isProduction ? ("[name]-" + hash) : "[name]",
        chunkhashName: isProduction ? ("[name]-" + chunkhash) : "[name]",
        contenthashName: isProduction ? ("[name]-" + contenthash) : "[name]",

        // ========================= webpack entry配置 =========================
        // 根据约定，自动扫描js entry，约定是src/page/xxx/main.js 或 src/page/xxx/main.jsx
        /** 
            获取结果示例
            {
                'js/index': [path.join(configWebpack.path.src, "/page/index/main.js")],
                'js/spa': [path.join(configWebpack.path.src, "/page/spa/main.js")],
                'js/pindex': [path.join(configWebpack.path.src, "/page/pindex/main.jsx")],
            }
         */
        entry: utils.filterJsFileByCmd(utils.getJsEntry({
            srcPath: path.join(srcPath, "page"), 
            fileName: "main",
            extensions: ["js", "jsx"],
            keyPrefix: "js/",
            level: 1
        })),

        // 自动扫描html，配合html-res-webpack-plugin
        /**
            获取结果示例
            [ 
                { 
                    key: 'index',
                    path: 'path/src/page/index/index.html'
                },
                { 
                    key: 'spa',
                    path: 'path/src/page/spa/index.html'
                },
                { 
                    key: 'pindex',
                    path: 'path/src/page/pindex/index.html'
                } 
            ]
         */
        html: utils.filterHtmlFileByCmd(utils.getHtmlEntry({
            srcPath: path.join(srcPath, "page"),
            level: 1
        })),

        // 自动扫描合图，配合webpack-spritesmith插件
        /**
            获取结果示例
            [
                { 
                    key: 'btn',
                    path: 'path/src/img/sprites/btn'
                },
                { 
                    key: 'list',
                    path: 'path/src/img/sprites/list'
                } 
            ]
         */
        sprites: utils.getSpriteEntry({
            srcPath: spritePath
        }),

    },
};



// ========================= webpack深度配置 =========================
// 使用了webpack-merge与webpack.base.js进行配置合并
// 如果上面的配置仍未能满足你，你可以在此处对webpack直接进行配置，这里的配置与webpack的配置项目一一对应
config.custom = {
    // webpack output
    getOutput: function() {
        return {};
    },

    // webpack module
    getModule: function() {

        var module = {
            rules: [
                { 
                    test: /\.js$/,
                    loader: 'happypack/loader?id=1',
                    exclude: /node_modules/,
                }
            ]
        }; 

        var styleRules = {
            css: {
                test: /\.css$/,
                // 单独抽出样式文件
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader', 
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                localIdentName: '[name]-[local]-[hash:base64:5]',
                                root: config.webpack.path.src,
                                module: config.webpack.cssModule
                            }
                        },
                        { loader: 'postcss-loader' },
                    ]
                }),
                include: path.resolve(config.webpack.path.src)
            },
            less: {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader', 
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                localIdentName: '[name]-[local]-[hash:base64:5]',
                                module: config.webpack.cssModule
                            }
                        },
                        { loader: 'postcss-loader' },
                        {
                            loader:  'less-loader',
                            options: {
                                paths: [
                                    config.webpack.path.src,
                                    "node_modules"
                                ]
                            }
                        }
                    ]
                }),
            },
            stylus: {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader', 
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                localIdentName: '[name]-[local]-[hash:base64:5]',
                                // module: true
                            }
                        },
                        { loader: 'postcss-loader' },
                        { 
                            loader:  'stylus-loader',
                            options: {
                                paths: [
                                    config.webpack.path.src,
                                    "node_modules"
                                ]
                            }
                        },
                    ]
                }),
            },
            sass: {
                test: /\.s(a|c)ss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader', 
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                localIdentName: '[name]-[local]-[hash:base64:5]',
                                // module: true
                            }
                        },
                        { loader: 'postcss-loader' },
                        { 
                            loader:  'sass-loader',
                            options: {
                                includePaths: [
                                    config.webpack.path.src,
                                    "node_modules"
                                ]
                            }
                        },
                    ]
                }),
            },
        };

        var templateRules = {
            html: {
                test: /\.html$/,
                loader: 'html-loader'
            },
            pug: {
                test: /\.pug$/, 
                loader: 'pug-loader'
            },
            handlebars: { 
                test: /\.handlebars$/, 
                loader: "handlebars-loader" 
            },  
        };

        config.webpack.style.forEach((style) => {
            let rule = styleRules[style] || '';
            rule && module.rules.push(rule);
        });

        config.webpack.template.forEach((tpl) => {
            let rule = templateRules[tpl] || '';
            rule && module.rules.push(rule);
        });

        return module;
    },

    // webpack resolve
    getResolve: function() {
        return {
            alias: config.webpack.alias
        };
    },

    // webpack plugins
    getPlugins: function() {
        var plugins = [
            new ExtractTextPlugin({
                filename:  (getPath) => {
                  return getPath('css/' + config.webpack.contenthashName + '.css').replace('css/js', 'css');
                },
                allChunks: false,
                disable: (isProduction || !config.webpack.extractCss) ? false : true,
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
            })
        ];
        
        config.webpack.html.forEach(function(page, key) {
            plugins.push(new HtmlResWebpackPlugin({
                mode: "html",
                filename: config.webpack.path.distWebserver + "/" + page.key + ".html", //isProduction ? (config.webpack.path.distWebserver + "/" + page.key + ".html") : page.key + ".html",
                template: page.path,
                favicon: "www/web/src/favicon.ico",
                htmlMinify: null,
                entryLog: !key ? true : false,
                templateContent: function(tpl) {
                    return tpl;
                }
            }));
        }); 

        return plugins;
    },
        
    // webpack externals
    getExternals: function() {
        return {
            '$': "zepto",
        };
    },

    // 其它 webpack 配置
    getOtherOptions: function() {
        return {};
    }
};

// ========================= webpack merge 的策略 =========================
config.webpackMerge = {
    // webpack-merge smartStrategy 配置
    smartStrategyOption: {
        "module.rules": "prepend",
        "plugins": "append"
    },

    // 在smartStrategy merge 之前，用户可以先行对 webpack.base.js 的配置进行处理
    mergeProcess: function(webpackBaseConfig) {

        return webpackBaseConfig;
    }
};

module.exports = config;