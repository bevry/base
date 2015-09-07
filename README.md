# Bevry's Project Base Files
Files we use when scaffolding new projects.


## Usage

### Setup the Project

``` shell
npm init
touch README.md
```


### Copy Files

``` shell
wget -N https://raw.githubusercontent.com/bevry/base/master/.editorconfig
wget -N https://raw.githubusercontent.com/bevry/base/master/.eslintrc
wget -N https://raw.githubusercontent.com/bevry/base/master/.gitignore
wget -N https://raw.githubusercontent.com/bevry/base/master/LICENSE.md

wget -N https://raw.githubusercontent.com/bevry/base/master/.npmignore
wget -N https://raw.githubusercontent.com/bevry/base/master/nakefile.js

wget -N https://raw.githubusercontent.com/bevry/base/master/CONTRIBUTING.md

wget -N https://raw.githubusercontent.com/bevry/base/master/.travis.yml

wget -N https://raw.githubusercontent.com/bevry/base/master/esnextguardian.js

wget -N https://raw.githubusercontent.com/bevry/base/master/package.json
wget -N https://raw.githubusercontent.com/bevry/base/master/HISTORY.md

wget -N https://raw.githubusercontent.com/bevry/base/master/coffeelint.json
```

### Install Development Dependencies

``` shell
npm install --save-dev eslint babel-eslint
npm install --save-dev projectz
npm install --save-dev babel
npm install --save-dev assert-helpers joe joe-reporter-console
npm install --save-dev browserify babelify
```

### Prepare Travis

``` shell
travis encrypt --org "$SLACK_SUBDOMAIN:$SLACK_TRAVIS_TOKEN#updates" --add notifications.slack
travis encrypt --org "$TRAVIS_NOTIFICATION_EMAIL" --add notifications.email.recipients
```


### Add files to Git

``` shell
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



### Copy relevant parts from `package.json`

[Get the `package.json` template.](https://github.com/bevry/base/blob/master/package.json)


### Nakefile Configuration

Nakefile Configuration properties with their default values that you can customise via `nakeConfiguration` inside your `package.json` file:

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

### If you have cyclic errors

Sometimes npm (it seems only applicable to legacy versions perhaps) would sometimes crash npm installs, when a project includes a cyclic dependency - for instance your are developing Project A which depends on Project B which also depends on Project A (the project you are developing). To fix this crash, `cyclic.js` is used as followed.


1. Download the cyclic command:

	``` shell
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


## History

[View the commit history for the release history.](https://github.com/bevry/base/commits/master)


## License
Licensed under the [Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/) making it [public domain](https://en.wikipedia.org/wiki/Public_domain) so you can do whatever you wish with it without worry (you can even remove this notice!)
<br/>Copyright &copy; 2011+ [Benjamin Lupton](http://balupton.com)
