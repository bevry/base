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

wget -N https://raw.githubusercontent.com/bevry/base/master/cyclic.js
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


### Copy relevant parts from `package.json`

[Get the `package.json` template.](https://github.com/bevry/base/blob/master/package.json)




## History

[View the commit history for the release history.](https://github.com/bevry/base/commits/master)


## License
Licensed under the [Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/) making it [public domain](https://en.wikipedia.org/wiki/Public_domain) so you can do whatever you wish with it without worry (you can even remove this notice!)
<br/>Copyright &copy; 2011+ [Benjamin Lupton](http://balupton.com)
