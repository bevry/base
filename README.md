# Bevry's Project Base Files
Files we use when scaffolding new projects.


## Usage

### Setup the Project

``` bash
# Initialise your new project
npm init

# Install our special dev dependencies
# projectz for maintaing our meta data files
# coffee-script for building our project
# joe and chai for testing our project
npm install --save-dev projectz joe joe-reporter-console chai coffee-script
```

### Copy Files

``` bash
# Download the files into your directory
# Only run this for the files you want to fetch

wget -N https://raw.githubusercontent.com/bevry/base/master/.gitignore
wget -N https://raw.githubusercontent.com/bevry/base/master/.npmignore
wget -N https://raw.githubusercontent.com/bevry/base/master/.travis.yml
wget -N https://raw.githubusercontent.com/bevry/base/master/.editorconfig
wget -N https://raw.githubusercontent.com/bevry/base/master/Cakefile
wget -N https://raw.githubusercontent.com/bevry/base/master/LICENSE.md
wget -N https://raw.githubusercontent.com/bevry/base/master/CONTRIBUTING.md

wget -N https://raw.githubusercontent.com/bevry/base/master/coffeelint.json
wget -N https://raw.githubusercontent.com/bevry/base/master/.jshintrc

wget -N https://raw.githubusercontent.com/bevry/base/master/HISTORY.md
wget -N https://raw.githubusercontent.com/bevry/base/master/package.json

wget -N https://raw.githubusercontent.com/bevry/base/master/cyclic.js
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

[View the `package.json` template here](https://github.com/bevry/base/blob/master/package.json)


### Add the files

``` bash
git add .gitignore .npmignore .travis.yml .editorconfig .jshintrc
git add .
```


## History

- v1.3.22 June 23, 2014
	- `CONTRIBUTING.md` fixed links to guidelines

- v1.3.21 June 23, 2014
	- `.travis.yml` will now install coffee-script for us (in case we forgot it)
		- CoffeeScript is needed for the `cake` command which is used in other places

- v1.3.20 June 16, 2014
	- `Cakefile` added title config to biscotto

- v1.3.19 June 15, 2014
	- `package.json`, `Cakefile` added [biscotto](http://atom.github.io/biscotto/) support

- v1.3.18 June 8, 2014
	- `.editorconfig` added
	- `.jshintrc` added
	- `coffeelint.json` added

- v1.3.17 May 29, 2014
	- `.travis.yml` now ensures the the npm version is the latest

- v1.3.16 May 23, 2014
	- `Cakefile` now uses the original locations for executables, rather than the npm symlink locations, which for some reason may not always be there

- v1.3.15 May 16, 2014
	- `COFFEE_SRC_PATH` is now longer defined in our `Cakefile`, and must now be defined in our `package.json` using `cakeConfiguration`

- v1.3.14 February 6, 2014
	- `.travis.yml`: Added caching of `node_modules` directory
	- `README.md`: added `"wishlist": "http://amzn.com/w/2F8TXKSNAFG4V"` to badges

- v1.3.13 December 19, 2013
	- `Cakefile`: Watching now happens in the background

- v1.3.12 December 13, 2013
	- `Cakefile`: Better cleaning

- v1.3.11 December 11, 2013
	- `Cakefile`
		- Supports configuration via `package.json` `cakeConfiguration` property
		- Supports DocPad compilation when `DOCPAD_SRC_PATH` configuration option is set

- v1.3.10 December 10, 2013
	- `CONTRIBUTING.md`: Added standards and guideline resources
	- `.npmignore`, `.gitignore`: added `**/.docpad.db`
	- `Cakefile`: CoffeeScript compilation is now optional

- v1.3.9 November 17, 2013
	- `CONTRIBUTING.md`: Better structure and more informative

- v1.3.8 November 7, 2013
	- `Cakefile`: will now install DocPad dev dependencies if we are using DocPad
	- `.travis.yml`: `cake install` is now explicitly part of the install process, rather than implied in the test process
	- Fixes compatibility with DocPad plugins
		- DocPad plugins still need to define DocPad in `peerDependencies` and `devDependencies`

- v1.3.7 November 1, 2013
	- `cyclic.js`: wrapped in self executing closure to prevent global leaks

- v1.3.6 November 1, 2013
	- `cyclic.js`: don't force install ourselves, if we've already done it previously

- v1.3.5 October 31, 2013
	- `.gitignore`: added `out`

- v1.3.4 October 26, 2013
	- `Cakefile`: push up master and tags after publish

- v1.3.3 October 26, 2013
	- `.npmignore`: fixed typo

- v1.3.2 October 26, 2013
	- `.travis.yml`: fixed

- v1.3.1 October 26, 2013
	- Tags should be annotated
	- Don't fail install if test directory is not found

- v1.3.0 October 26, 2013
	- As the npm package scripts only works on windows, instead lets take the good bits from both solutions

- v1.2.0 October 25, 2013
	- Abandoned the Cakefile setup for npm package scripts

- v1.1.3 October 2, 2013
	- Don't use the `bare` option to compile coffeescript, it pollutes the global namespace

- v1.1.2 September 2, 2013
	- Fixed status codes not being taken into account
	- `safe` now supports only one argument

- v1.1.1 June 25, 2013
	- Initial changelog entry


## License
Licensed under the [Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/) making it [public domain](https://en.wikipedia.org/wiki/Public_domain) so you can do whatever you wish with it without worry (you can even remove this notice!)
<br/>Copyright &copy; 2011+ [Benjamin Lupton](http://balupton.com)
