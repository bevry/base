# Bevry's Project Base Files
Files we use when scaffolding new projects.


## Setup

### init

Setup your new project:

``` shell
npm init
touch README.md
```


### files

Download the relevant files for your project:

``` shell
wget -N https://raw.githubusercontent.com/bevry/base/master/.editorconfig
wget -N https://raw.githubusercontent.com/bevry/base/master/.eslintrc.js
wget -N https://raw.githubusercontent.com/bevry/base/master/.gitignore
wget -N https://raw.githubusercontent.com/bevry/base/master/LICENSE.md

wget -N https://raw.githubusercontent.com/bevry/base/master/.flowconfig
wget -N https://raw.githubusercontent.com/bevry/base/master/.npmignore

wget -N https://raw.githubusercontent.com/bevry/base/master/CONTRIBUTING.md

wget -N https://raw.githubusercontent.com/bevry/base/master/index.js

wget -N https://raw.githubusercontent.com/bevry/base/master/.travis.yml

wget -N https://raw.githubusercontent.com/bevry/base/master/package.json
wget -N https://raw.githubusercontent.com/bevry/base/master/HISTORY.md
```

And add them to git:

``` shell
git add .editorconfig .eslintrc.js .gitignore .flowconfig .npmignore .travis.yml
git add .
mkdir source
touch source/index.js
touch source/test.js
touch source/bin.js
```


### readme

Use the following inside your `README.md` file to have [projectz](https://github.com/bevry/projectz) generate most of it for you, leaving you up the "Usage" section.

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


### dependencies

Add the appropriate development dependencies for what you want to do:

``` shell
npm install --save-dev projectz  # for projectz meta+package file compilation
npm install --save-dev eslint  # for eslint parsing and linting
npm install --save-dev babel-cli babel-preset-es2015 # for babel es6+ to es5 compilation
npm install --save-dev eslint-plugin-babel eslint-plugin-react # for esnext eslinting
npm install --save-dev assert-helpers joe joe-reporter-console  # for testing
npm install --save-dev documentation  # for documentation
npm install --save-dev flow-bin # for flow type
npm install --save-dev editions  # for loading the best edition for the current environment
```


### package.json

Finally copy the relevant parts of our [`package.json` template](https://github.com/bevry/base/blob/master/package.json) for your consumption.



## Configure

### travis

Run the following in the project to add notifications for the builds (requires the environment variables to be set):

``` shell
travis encrypt --org "$SLACK_SUBDOMAIN:$SLACK_TRAVIS_TOKEN#updates" --add notifications.slack
travis encrypt --org "$TRAVIS_NOTIFICATION_EMAIL" --add notifications.email.recipients
```

If you get [token errors with travis](https://github.com/travis-ci/travis.rb/issues/315), add this to you dotfiles:

``` shell
export TRAVIS_ACCESS_TOKEN='the token value found in ~/.travis/config.yml'
alias travisencrypt='travis encrypt -t "$TRAVIS_ACCESS_TOKEN"'
```

And use this instead:

``` shell
travisencrypt --org "$SLACK_SUBDOMAIN:$SLACK_TRAVIS_TOKEN#updates" --add notifications.slack
travisencrypt --org "$TRAVIS_NOTIFICATION_EMAIL" --add notifications.email.recipients
```


### esnextguardian

If you would like to use ES6+ features natively if supported but also support environments where those ES6+ features may not be available, then you can utilise [ESNextGuardian](https://github.com/bevry/esnextguardian) to try and load the ES6+ file first, and if that fails, then it fallbacks to loading the compiled ES5 version that runs wherever.

To get started with this:

1. Add our [`esnextguardian.js` file](https://github.com/bevry/base/blob/master/esnextguardian.js) to your project
1. Follow the latest [ESNextGuardian](https://github.com/bevry/esnextguardian) usage instructions


### nakefile

Nakefiles are a standalone node file called `nakefile.js` that doesn't have any other external dependencies while providing tooling for installing, compiling, testing, and releasing your project. Consider them like a cross-platform Makefile built with Node.js. [Learn more.](https://blog.bevry.me/bevry-news-2015-weeks-34-35-36-7f1516cb2580) [See ours.](https://github.com/bevry/base/blob/master/nakefile.js)

#### nakefile npm scripts


``` json
{
	"scripts": {
		"clean": "node --harmony nakefile.js clean",
		"setup": "node --harmony nakefile.js setup",
		"compile": "node --harmony nakefile.js compile",
		"watch": "node --harmony nakefile.js watch",
		"verify": "node --harmony nakefile.js verify",
		"meta": "node --harmony nakefile.js meta",
		"prepare": "node --harmony nakefile.js prepare",
		"release": "node --harmony nakefile.js release"
	}
}
```

#### nakefile configuration

The following Nakefile configuration properties are listed below with their default values. You can customize them via the `nakeConfiguration` property inside your `package.json` file.

``` json
{
	"nakeConfiguration": {
		"TEST_PATH": "test",
		"DOCCO_SRC_PATH": null,
		"DOCCO_OUT_PATH": "docs",
		"BISCOTTO_SRC_PATH": null,
		"BISCOTTO_OUT_PATH": "docs",
		"YUIDOC_SRC_PATH": null,
		"YUIDOC_OUT_PATH": "docs",
		"YUIDOC_SYNTAX": "js",
		"COFFEE_SRC_PATH": null,
		"COFFEE_OUT_PATH": "out",
		"DOCPAD_SRC_PATH": null,
		"DOCPAD_OUT_PATH": "out",
		"BABEL_SRC_PATH": null,
		"BABEL_OUT_PATH": "es5",
		"ESLINT_SRC_PATH": null,
		"COFFEELINT_SRC_PATH": null
	}
}
```


### cyclic dependencies

Cyclic dependencies would fail in npm version 1 and earlier. If you have cyclic dependencies and require support for npm v1, do the following:

1. Add our [`cyclic.js` file](https://github.com/bevry/base/master/cyclic.js) to your project:

	``` shell
	wget -N https://raw.githubusercontent.com/bevry/base/master/cyclic.js
	```

1. Get it to run on the npm `preinstall` script, by adding the following your `package.json`:

	``` json
	{
		"scripts": {
			"preinstall": "node cyclic.js"
		}
	}
	```


## Legacy

The following legacy parts of the base files

### [JSHint](http://jshint.com)

[Our `.jshintrc` file.](https://github.com/bevry/base/blob/b1335ea16811d2870dbde87c3a1a606797db54a0/.jshintrc)
Dropped in favour of eslint.

### [JSCS](http://jscs.info)

[Our `.jscrc` file.](https://github.com/bevry/base/blob/34fc820c8d87f1f21706ce7e26882b6cd5437368/.jscrc)
Dropped in favour of eslint.


## History

[View the commit history for the release history.](https://github.com/bevry/base/commits/master)


## License
Licensed under the [Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/) making it [public domain](https://en.wikipedia.org/wiki/Public_domain) so you can do whatever you wish with it without worry (you can even remove this notice!)
<br/>Copyright &copy; 2011+ [Benjamin Lupton](http://balupton.com)
