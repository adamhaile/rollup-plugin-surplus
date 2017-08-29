"use strict";

var preprocessor = require("surplus-preprocessor"),
	createFilter = require('rollup-pluginutils').createFilter;

module.exports = function surplus(options) {
	if (!options) options = {};

	var filter = createFilter(options.include, options.exclude);

	return {
		name: 'surplus',

		transform: function (code, id) {
			if (!filter(id)) return null;
			
		    return preprocessor.preprocess(code, { });
		}
	};
}
