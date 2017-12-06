"use strict";

var compiler = require("surplus/compiler"),
	createFilter = require('rollup-pluginutils').createFilter;

module.exports = function surplus(options) {
	if (!options) options = {};

	var filter = createFilter(options.include, options.exclude);

	return {
		name: 'surplus',

		transform: function (code, id) {
			if (!filter(id)) return null;

			var map;
			if (options.sourcemap) {
				var map = compiler.compile(code, {sourcemap: options.sourcemap}).map;
			}
			var code = compiler.compile(code, {});
			return {
				code: code,
				map: map
			};
		}
	};
}
