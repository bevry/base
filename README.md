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
npm install --save-dev projectz coffee-script joe joe-reporter-console chai
```

### Copy Files

``` bash
# Download the files into your directory
# Only run this for the files you want to fetch
rm .gitignore; wget https://raw.github.com/bevry/base/master/.gitignore
rm .npmignore; wget https://raw.github.com/bevry/base/master/.npmignore
rm .travis.yml; wget https://raw.github.com/bevry/base/master/.travis.yml
rm Cakefile; wget https://raw.github.com/bevry/base/master/Cakefile
rm LICENSE.md; wget https://raw.github.com/bevry/base/master/LICENSE.md
rm CONTRIBUTING.md; wget https://raw.github.com/bevry/base/master/CONTRIBUTING.md
rm HISTORY.md; wget https://raw.github.com/bevry/base/master/HISTORY.md
rm package.json; wget https://raw.github.com/bevry/base/master/package.json
rm cyclic.js; wget https://raw.github.com/bevry/base/master/cyclic.js
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

``` json
{
  "author": "2013+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)",
  "license": "MIT",
  "badges": {
    "travis": true,
    "npm": true,
    "gittip": "bevry",
    "flattr": "344188/balupton-on-Flattr",
    "paypal": "QB8GQPZAH84N6"
  },
  "devDependencies": {
    "projectz": "~0.2.3"
  },
  "scripts": {
    "preinstall": "node ./cyclic.js",
    "test": "node ./out/test/caterpillar-test.js",
    "start": "node ./node_modules/coffee-script/bin/cake watch"
  }
}
```

### Add the files

``` bash
git add .gitignore .npmignore .travis.yml Cakefile LICENSE.md CONTRIBUTING.md HISTORY.md README.md package.json cyclic.js src/
```


## History

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
