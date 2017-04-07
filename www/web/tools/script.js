"use strict";

const utils = require('steamer-webpack-utils'),
	  webpack = require('webpack'),
	  fs = require('fs'),
	  path = require('path');

var argv = utils.getArgvs(),
	mode = argv.mode;

var isProduction = mode === "production";

if (mode === 'development') {
	process.env.NODE_ENV = "development";

	require('./server');
}
else if (mode === 'production') {
	process.env.NODE_ENV = "production";

	var config = require('../config/project'),
    	configWebpack = config.webpack;

	var compiler = webpack(require('./webpack.base'));
	compiler.run(function(err, stats) {
	    if (!err) {
	        const jsonStats = stats.toJson();
	        // print asset stats
	        // fs.writeFileSync("stats.txt", JSON.stringify(jsonStats, " " , 4))
	        
	        console.log(stats.toString({
	            cached: true,
	            chunks: false, // Makes the dist much quieter
	            colors: true,
	            children: false, // supress some plugin output
	        }));

	        if (jsonStats.errors.length > 0) {
	            console.log('Webpack compiler encountered errors.');
	            console.log(jsonStats.errors.join('\n'));
	        } else if (jsonStats.warnings.length > 0) {
	            console.log('Webpack compiler encountered warnings.');
	            console.log(jsonStats.warnings.join('\n'));
	        }

	        configWebpack.html.forEach((file) => {
	        	let srcPath = path.join(__dirname, "../../static/", file.key + ".html"),
	        		destPath = path.join(__dirname, "../../../view/home/", file.key + ".html"),
	        		htmlContent = fs.readFileSync(srcPath, "utf-8");

	        	fs.writeFileSync(destPath, htmlContent, "utf-8");
	        });
	    }
	    else {
	        console.log(err);
	    }
	});
}