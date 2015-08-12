# Bevry's Project Base Files
Files we use when scaffolding new projects.


## Usage

### Setup the Project

``` bash
npm init
touch README.md
```


### Copy Files

``` bash
wget -N https://raw.githubusercontent.com/bevry/base/master/.editorconfig
wget -N https://raw.githubusercontent.com/bevry/base/master/.eslintrc
wget -N https://raw.githubusercontent.com/bevry/base/master/.gitignore
wget -N https://raw.githubusercontent.com/bevry/base/master/coffeelint.json
wget -N https://raw.githubusercontent.com/bevry/base/master/LICENSE.md

wget -N https://raw.githubusercontent.com/bevry/base/master/.npmignore
wget -N https://raw.githubusercontent.com/bevry/base/master/.travis.yml
wget -N https://raw.githubusercontent.com/bevry/base/master/Cakefile

wget -N https://raw.githubusercontent.com/bevry/base/master/CONTRIBUTING.md

wget -N https://raw.githubusercontent.com/bevry/base/master/package.json
wget -N https://raw.githubusercontent.com/bevry/base/master/HISTORY.md

wget -N https://raw.githubusercontent.com/bevry/base/master/es6guardian.js
wget -N https://raw.githubusercontent.com/bevry/base/master/coffeelint.json
```

### Install Development Dependencies

``` bash
npm install --save-dev assert-helpers joe joe-reporter-console
npm install --save-dev projectz coffee-script
npm install --save-dev babel
npm install --save-dev eslint babel-eslint
npm install --save-dev browserify babelify
```


### Add files to Git

``` bash
git add .editorconfig .eslintrc .gitignore .npmignore .travis.yml
git add .
```


### Copy `README.md`

``` markdown

<!-- TITLE -->

<!-- BADGES -->

<!-- DESCRIPTION -->

<!-- INSTALL -->

## Usage

<!-- HISTORY -->

<!-- CONTRIBUTE -->

<!-- BACKERS -->

<!-- LICENSE -->
```


### If you have cyclic errors

1. Download the cyclic command:

	``` bash
	wget -N https://raw.githubusercontent.com/bevry/base/master/cyclic.js
	```

1. Add the following to your `package.json` file:

	``` json
	{
		"scripts": {
			"preinstall": "node ./cyclic.js"
		}
	}
	```


### Copy relevant parts from `package.json`

[Get the `package.json` template.](https://github.com/bevry/base/blob/master/package.json)


### Cake Configuration

Cake Configuration properties you can customise and their defaults:

``` coffee
config.TEST_PATH           = "test"
config.DOCCO_SRC_PATH      = null
config.DOCCO_OUT_PATH      = "docs"
config.BISCOTTO_SRC_PATH   = null
config.BISCOTTO_OUT_PATH   = "docs"
config.YUIDOC_SRC_PATH     = null
config.YUIDOC_OUT_PATH     = "docs"
config.COFFEE_SRC_PATH     = null
config.COFFEE_OUT_PATH     = "out"
config.DOCPAD_SRC_PATH     = null
config.DOCPAD_OUT_PATH     = "out"
config.BABEL_SRC_PATH      = null
config.BABEL_OUT_PATH      = "es5"
config.ESLINT_SRC_PATH     = null
```


## History

[View the commit history for the release history.](https://github.com/bevry/base/commits/master)


## License
Licensed under the [Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/) making it [public domain](https://en.wikipedia.org/wiki/Public_domain) so you can do whatever you wish with it without worry (you can even remove this notice!)
<br/>Copyright &copy; 2011+ [Benjamin Lupton](http://balupton.com)
