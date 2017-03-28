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

> - If you have wget, replace `down` with `wget -N`
> - If you have curl, replace `down` with `curl -OL`

``` shell
down https://raw.githubusercontent.com/bevry/base/master/.editorconfig
down https://raw.githubusercontent.com/bevry/base/master/.eslintrc.js
down https://raw.githubusercontent.com/bevry/base/master/.gitignore
down https://raw.githubusercontent.com/bevry/base/master/LICENSE.md

down https://raw.githubusercontent.com/bevry/base/master/.npmignore

down https://raw.githubusercontent.com/bevry/base/master/CONTRIBUTING.md

down https://raw.githubusercontent.com/bevry/base/master/index.js
down https://raw.githubusercontent.com/bevry/base/master/test.js

down https://raw.githubusercontent.com/bevry/base/master/.flowconfig

down https://raw.githubusercontent.com/bevry/base/master/.travis.yml

down https://raw.githubusercontent.com/bevry/base/master/package.json
down https://raw.githubusercontent.com/bevry/base/master/HISTORY.md
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

> - If you have yarn, replace `nid` with `yarn add --dev` and `ni` with `yarn add`
> - If you have npm, replace `nid` with `npm install --save-dev` and `ni` with `npm install --save`

``` shell
# Meta Compilation
nid projectz

# Linting
nid eslint

# Babel Compilation
nid babel-cli babel-preset-es2015

# Edition Autoloading
ni editions

# Testing
nid assert-helpers joe joe-reporter-console

# Documentation
nid documentation

# Flow Type
nid flow-bin

# Babel Experimental Feature Linting
nid eslint-plugin-babel

# React Linting
nid eslint-plugin-react
```


### package.json

Copy over the relevant parts from our [`package.json` template](https://github.com/bevry/base/blob/master/package.json).


### travis

Full set of available customisations and their documentations is available over at [balupton/awesome-travis](https://github.com/balupton/awesome-travis/).


### configuration

``` shell
# https://github.com/balupton/awesome-travis/blob/master/README.md#release-to-npm
npm owner add $NPM_USERNAME
travis encrypt "NPM_USERNAME=$NPM_USERNAME" --add env.global --no-interactive
travis encrypt "NPM_PASSWORD=$NPM_PASSWORD" --add env.global --no-interactive
travis encrypt "NPM_EMAIL=$NPM_EMAIL" --add env.global --no-interactive

# https://github.com/balupton/awesome-travis#release-to-surge
travis encrypt "SURGE_LOGIN=$SURGE_LOGIN" --add env.global --no-interactive
travis encrypt "SURGE_TOKEN=$SURGE_TOKEN" --add env.global --no-interactive

# github client details for rate limits
travis encrypt "GITHUB_CLIENT_ID=$GITHUB_CLIENT_ID" --add env.global --no-interactive
travis encrypt "GITHUB_CLIENT_SECRET=$GITHUB_CLIENT_SECRET" --add env.global --no-interactive
  
# https://github.com/balupton/awesome-travis/blob/master/README.md#slack
# https://github.com/balupton/awesome-travis/blob/master/README.md#email
travis encrypt "$SLACK_SUBDOMAIN:$SLACK_TRAVIS_TOKEN#updates" --add notifications.slack --no-interactive
travis encrypt "$TRAVIS_NOTIFICATION_EMAIL" --add notifications.email.recipients --no-interactive
```


## Legacy

### Scripts

CoffeeScript scripts:

``` json
{
  "scripts": {
    "our:verify:coffeelint": "coffeelint ./source",
    "our:compile:coffeescript": "coffee -bco ./es5 ./source",
    "our:meta:yuidoc": "yuidoc -o ./docs --syntaxtype coffee -e .coffee ./source",
    "our:meta:biscotto": "biscotto -n $npm_package_title --title \"$npm_package_title API Documentation\" -r README.md -o ./docs ./source - ./LICENSE.md ./HISTORY.md"
  }
}
```

### [ESNextGuardian](https://github.com/bevry/esnextguardian)
[Our `esnextguardian.js` file.](https://github.com/bevry/base/blob/34fc820c8d87f1f21706ce7e26882b6cd5437368/esnextguardian.js)

``` shell
down https://raw.githubusercontent.com/bevry/base/34fc820c8d87f1f21706ce7e26882b6cd5437368/esnextguardian.js
```

Dropped in favour of [Editions](https://github.com/bevry/editions).


### [Nakefile](https://github.com/bevry/base/wiki/Nakefile)
[Our `nakefile.js` file.](https://github.com/bevry/base/blob/34fc820c8d87f1f21706ce7e26882b6cd5437368/nakefile.js)

``` shell
down https://raw.githubusercontent.com/bevry/base/34fc820c8d87f1f21706ce7e26882b6cd5437368/nakefile.js
```

Dropped in favour of NPM Scripts.


### [Cakefile](http://coffeescript.org/#cake)
[Our `Cakefile` file.](https://raw.githubusercontent.com/bevry/base/22bbd5999c420c4058fd54becb9b1cd3cd1d70dd/Cakefile)

``` shell
down https://raw.githubusercontent.com/bevry/base/22bbd5999c420c4058fd54becb9b1cd3cd1d70dd/Cakefile
```

Dropped in favour of NPM Scripts.


### [CoffeeLint](http://www.coffeelint.org)
[Our `coffeelint.json` file.](https://github.com/bevry/base/blob/34fc820c8d87f1f21706ce7e26882b6cd5437368/coffeelint.json)

``` shell
down https://raw.githubusercontent.com/bevry/base/34fc820c8d87f1f21706ce7e26882b6cd5437368/coffeelint.json
```

Dropped in favour of ESNext.


### [Cyclic](https://github.com/bevry/base/wiki/Cyclic)
[Our `cyclic.js` file.](https://github.com/bevry/base/blob/34fc820c8d87f1f21706ce7e26882b6cd5437368/cyclic.js)

``` shell
down https://raw.githubusercontent.com/bevry/base/34fc820c8d87f1f21706ce7e26882b6cd5437368/cyclic.js
```

Dropped in favour of npm `>=2`.


### [JSHint](http://jshint.com)
[Our `.jshintrc` file.](https://github.com/bevry/base/blob/b1335ea16811d2870dbde87c3a1a606797db54a0/.jshintrc)

``` shell
down https://raw.githubusercontent.com/bevry/base/b1335ea16811d2870dbde87c3a1a606797db54a0/.jshintrc
```

Dropped in favour of [ESLint](http://eslint.org).


### [JSCS](http://jscs.info)
[Our `.jscrc` file.](https://github.com/bevry/base/blob/34fc820c8d87f1f21706ce7e26882b6cd5437368/.jscrc)

``` shell
down https://raw.githubusercontent.com/bevry/base/34fc820c8d87f1f21706ce7e26882b6cd5437368/.jscrc
```

Dropped in favour of [ESLint](http://eslint.org).


## History

[View the commit history for the release history.](https://github.com/bevry/base/commits/master)


## License
Licensed under the [Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/) making it [public domain](https://en.wikipedia.org/wiki/Public_domain) so you can do whatever you wish with it without worry (you can even remove this notice!)
<br/>Copyright &copy; 2011+ [Benjamin Lupton](http://balupton.com)
