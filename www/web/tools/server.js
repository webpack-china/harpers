"use strict";

const express = require('express'),
	app = express(),
	path = require('path'),
	fs = require('fs'),
	webpack = require('webpack'),
	webpackDevMiddleware = require("webpack-dev-middleware"),
	webpackHotMiddleware = require("webpack-hot-middleware"),
	proxy = require('proxy-middleware');


var webpackConfig = require("./webpack.base.js"),
	config = require("../config/project"),
	configWebpack = config.webpack;

for (var key in webpackConfig.entry) {
    webpackConfig.entry[key].unshift('webpack-hot-middleware/client?reload=true&dynamicPublicPath=true&path=__webpack_hmr')
}

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    hot: true,
	historyApiFallback: true,
	stats: {
		colors: true
	},
}));

// 把内存中的 html 文件内容写到thinkjs的模板目录下
var hasWrite = false;
app.use(function(req, res, next) {

	if (hasWrite) {
		return next();
	}

	var mfs = compiler.outputFileSystem;

	Object.keys(mfs.data).forEach((file) => {
		if (!!~file.indexOf('html')) {
			let bufferContent = mfs.data[file],
				content = bufferContent.toString();

			let filepath = path.join(__dirname, "../../../view/home/" + file);

			fs.writeFileSync(filepath, content, "utf-8");

		}
	});

	hasWrite = true;
	next();
});

app.use(webpackHotMiddleware(compiler, {
    // 这里和上面的client配合，可以修正 webpack_hmr 的路径为项目路径的子路径，而不是直接成为 host 子路径（从publicPath开始，而不是根开始）
    // https://github.com/glenjamin/webpack-hot-middleware/issues/24
    // path: webpackConfig.output.publicPath + '__webpack_hmr'
}));

// 前端转发
app.use(configWebpack.route, proxy('http://127.0.0.1:' + configWebpack.port));
// 后台转发
// app.use('/api/', proxy('http://localhost:3001'));
app.use("/", proxy("http://127.0.0.1:8360"));

app.listen(configWebpack.port, function(err) {
	if (err) {
		console.error(err);
	}
	else {
		console.info("Listening on port %s. Open up http://127.0.0.1:%s/ in your browser.", configWebpack.port, configWebpack.port);
	}
});
