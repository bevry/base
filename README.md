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

> Replace `download` with `wget -N` if you have wget or `curl -OL` if you have curl

``` shell
download https://raw.githubusercontent.com/bevry/base/master/.editorconfig
download https://raw.githubusercontent.com/bevry/base/master/.eslintrc.js
download https://raw.githubusercontent.com/bevry/base/master/.gitignore
download https://raw.githubusercontent.com/bevry/base/master/LICENSE.md

download https://raw.githubusercontent.com/bevry/base/master/.npmignore

download https://raw.githubusercontent.com/bevry/base/master/CONTRIBUTING.md

download https://raw.githubusercontent.com/bevry/base/master/index.js

download https://raw.githubusercontent.com/bevry/base/master/.travis.yml

download https://raw.githubusercontent.com/bevry/base/master/.flowconfig

download https://raw.githubusercontent.com/bevry/base/master/package.json
download https://raw.githubusercontent.com/bevry/base/master/HISTORY.md
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
# Meta Compilation
npm install --save-dev projectz

# Linting
npm install --save-dev eslint

# Babel Compilation
npm install --save-dev babel-cli babel-preset-es2015

# Edition Autoloading
npm install --save editions

# Babel Experimental Feature Linting
npm install --save-dev eslint-plugin-babel

# Testing
npm install --save-dev assert-helpers joe joe-reporter-console

# Documentation
npm install --save-dev documentation

# Flow Type
npm install --save-dev flow-bin

# React Linting
npm install --save-dev eslint-plugin-react
```


### package.json

Finally copy the relevant parts of our [`package.json` template](https://github.com/bevry/base/blob/master/package.json) for your consumption.


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



## Legacy

### [ESNextGuardian](https://github.com/bevry/esnextguardian)
[Our `esnextguardian.js` file.](https://github.com/bevry/base/blob/34fc820c8d87f1f21706ce7e26882b6cd5437368/esnextguardian.js)

``` shell
download https://raw.githubusercontent.com/bevry/base/34fc820c8d87f1f21706ce7e26882b6cd5437368/esnextguardian.js
```

Dropped in favour of [Editions](https://github.com/bevry/editions).


### [Nakefile](https://github.com/bevry/base/wiki/Nakefile)
[Our `nakefile.js` file.](https://github.com/bevry/base/blob/34fc820c8d87f1f21706ce7e26882b6cd5437368/nakefile.js)

``` shell
download https://raw.githubusercontent.com/bevry/base/34fc820c8d87f1f21706ce7e26882b6cd5437368/nakefile.js
```

Dropped in favour of NPM Scripts.


### [CoffeeLint](http://www.coffeelint.org)
[Our `coffeelint.json` file.](https://github.com/bevry/base/blob/34fc820c8d87f1f21706ce7e26882b6cd5437368/coffeelint.json)

``` shell
download https://raw.githubusercontent.com/bevry/base/34fc820c8d87f1f21706ce7e26882b6cd5437368/coffeelint.json
```

Dropped in favour of ESNext.


### [Cyclic](https://github.com/bevry/base/wiki/Cyclic)
[Our `cyclic.js` file.](https://github.com/bevry/base/blob/34fc820c8d87f1f21706ce7e26882b6cd5437368/cyclic.js)

``` shell
download https://raw.githubusercontent.com/bevry/base/34fc820c8d87f1f21706ce7e26882b6cd5437368/cyclic.js
```

Dropped in favour of npm `>=2`.

### [JSHint](http://jshint.com)
[Our `.jshintrc` file.](https://github.com/bevry/base/blob/b1335ea16811d2870dbde87c3a1a606797db54a0/.jshintrc)

``` shell
download https://raw.githubusercontent.com/bevry/base/b1335ea16811d2870dbde87c3a1a606797db54a0/.jshintrc
```

Dropped in favour of [ESLint](http://eslint.org).


### [JSCS](http://jscs.info)
[Our `.jscrc` file.](https://github.com/bevry/base/blob/34fc820c8d87f1f21706ce7e26882b6cd5437368/.jscrc)

``` shell
download https://raw.githubusercontent.com/bevry/base/34fc820c8d87f1f21706ce7e26882b6cd5437368/.jscrc
```

Dropped in favour of [ESLint](http://eslint.org).


## History

[View the commit history for the release history.](https://github.com/bevry/base/commits/master)


## License
Licensed under the [Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/) making it [public domain](https://en.wikipedia.org/wiki/Public_domain) so you can do whatever you wish with it without worry (you can even remove this notice!)
<br/>Copyright &copy; 2011+ [Benjamin Lupton](http://balupton.com)

