// 2015 December 8
// https://github.com/bevry/esnextguardian
var pathUtil = require('path')
module.exports = require('esnextguardian')(
    pathUtil.join(__dirname, 'esnext', 'lib', 'index.js'),
    pathUtil.join(__dirname, 'es5', 'lib', 'index.js'),
    require
)
