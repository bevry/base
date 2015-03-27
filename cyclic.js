// 27 March 2015
// https://github.com/bevry/base
(function () {
	var fsUtil = require('fs'),
		pathUtil = require('path'),
		existsSync = fsUtil.existsSync || pathUtil.existsSync, /* node 0.6 compat */
		name = require('./package.json').name
	if ( existsSync('.git') === true && existsSync('./node_modules/'+name) === false ) {
		require('child_process').spawn(
			process.platform.indexOf('win') === 0 ? process.execPath.replace('node.exe', 'npm.cmd') : 'npm',
			['install', '--force', name],
			{
				env: process.env,
				cwd: process.cwd(),
				stdio: 'inherit' /* stdio doesn't exist below node <0.8 but oh well */
			}
		).on('error', console.log).on('close', console.log)
	}
}())
