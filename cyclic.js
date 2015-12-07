// 2015 March 28
// https://github.com/bevry/base
(function () {
	var fsUtil = require('fs')
	var pathUtil = require('path')
	var existsSync = fsUtil.existsSync || pathUtil.existsSync /* node 0.6 compat */
	var cwd = __dirname
	var moduleName = require('./package.json').name
	var modulePath = pathUtil.join(cwd, 'node_modules', moduleName)
	var command = 'npm install --force '+moduleName
	var options = {
		env: process.env,
		cwd: cwd,
		stdio: 'inherit' /* stdio doesn't exist below node <0.8 but oh well */
	}
	if ( existsSync('.git') === true && existsSync(modulePath) === false ) {
		require('child_process').exec(command, options)
	}
}())
