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
rm BACKERS.md; wget https://raw.github.com/bevry/base/master/BACKERS.md
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

### Add the files

``` bash
git add .gitignore .npmignore .travis.yml BACKERS.md CONTRIBUTING.md Cakefile HISTORY.md LICENSE.md README.md out/ package.json src/
```


## History

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