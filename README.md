# Bevry's Project Base Files

Files we use when scaffolding new projects.

## Automatic

For complete automatic application of our base files, use [`boundation`](https://github.com/bevry/boundation). Eventually boundation will replace this entire repository.

## Manual

For manual application of base files.

### Files

Download the relevant files for your project:

> -   If you have wget, replace `down` with `wget -N`
> -   If you have curl, replace `down` with `curl -OL`

```shell
down https://raw.githubusercontent.com/bevry/base/master/.editorconfig
down https://raw.githubusercontent.com/bevry/base/master/.flowconfig
down https://raw.githubusercontent.com/bevry/base/master/.gitignore
down https://raw.githubusercontent.com/bevry/base/master/.npmignore
down https://raw.githubusercontent.com/bevry/base/master/CONTRIBUTING.md
down https://raw.githubusercontent.com/bevry/base/master/HISTORY.md
down https://raw.githubusercontent.com/bevry/base/master/LICENSE.md
```

### Travis

Refer to [bevry/awesome-travis](https://github.com/bevry/awesome-travis/) for our TravisCI base files.

## Legacy

### Stylelint Config File

[Our `.stylelintrc.js` file.](https://github.com/bevry/base/blob/c9fed620552b3334e05de999eab7186ff91fbf2d/.stylelintrc.js)

```shell
down https://github.com/bevry/base/blob/c9fed620552b3334e05de999eab7186ff91fbf2d/.stylelintrc.js
```

Dropped in favour of [Boundation](https://github.com/bevry/boundation).

### TypeScript Config File

[Our `tsconfig.json` file.](https://github.com/bevry/base/blob/01aac915b59c84251f9b5182704d05708ac1aa86/tsconfig.json)

```shell
down https://github.com/bevry/base/blob/01aac915b59c84251f9b5182704d05708ac1aa86/tsconfig.json
```

Dropped in favour of [Boundation](https://github.com/bevry/boundation).

### TravisCI File

[Our `.travis.yml` file.](https://github.com/bevry/base/blob/01aac915b59c84251f9b5182704d05708ac1aa86/.travis.yml)

```shell
down https://github.com/bevry/base/blob/01aac915b59c84251f9b5182704d05708ac1aa86/.travis.yml
```

Dropped in favour of [Boundation](https://github.com/bevry/boundation) and [Awesome Travis](https://github.com/bevry/awesome-travis).

### DocPad Setup File

[Our `docpad-setup.sh` file.](https://github.com/bevry/base/blob/01aac915b59c84251f9b5182704d05708ac1aa86/docpad-setup.sh)

```shell
down https://github.com/bevry/base/blob/01aac915b59c84251f9b5182704d05708ac1aa86/docpad-setup.sh
```

Dropped in favour of [Boundation](https://github.com/bevry/boundation).

### ESLint Config File

[Our `.eslintrc.js` file.](https://github.com/bevry/base/blob/01aac915b59c84251f9b5182704d05708ac1aa86/.eslintrc.js)

```shell
down https://github.com/bevry/base/blob/01aac915b59c84251f9b5182704d05708ac1aa86/.eslintrc.js
```

Dropped in favour of [`eslint-config-bevry`](https://github.com/bevry/eslint-config-bevry).

### [ESNextGuardian](https://github.com/bevry/esnextguardian)

[Our `esnextguardian.js` file.](https://github.com/bevry/base/blob/34fc820c8d87f1f21706ce7e26882b6cd5437368/esnextguardian.js)

```shell
down https://raw.githubusercontent.com/bevry/base/34fc820c8d87f1f21706ce7e26882b6cd5437368/esnextguardian.js
```

Dropped in favour of [Editions](https://github.com/bevry/editions).

### [Nakefile](https://github.com/bevry/base/wiki/Nakefile)

[Our `nakefile.js` file.](https://github.com/bevry/base/blob/34fc820c8d87f1f21706ce7e26882b6cd5437368/nakefile.js)

```shell
down https://raw.githubusercontent.com/bevry/base/34fc820c8d87f1f21706ce7e26882b6cd5437368/nakefile.js
```

Dropped in favour of NPM Scripts.

### [Cakefile](http://coffeescript.org/#cake)

[Our `Cakefile` file.](https://raw.githubusercontent.com/bevry/base/22bbd5999c420c4058fd54becb9b1cd3cd1d70dd/Cakefile)

```shell
down https://raw.githubusercontent.com/bevry/base/22bbd5999c420c4058fd54becb9b1cd3cd1d70dd/Cakefile
```

Dropped in favour of NPM Scripts.

### [CoffeeLint](http://www.coffeelint.org)

[Our `coffeelint.json` file.](https://github.com/bevry/base/blob/34fc820c8d87f1f21706ce7e26882b6cd5437368/coffeelint.json)

```shell
down https://raw.githubusercontent.com/bevry/base/34fc820c8d87f1f21706ce7e26882b6cd5437368/coffeelint.json
```

```json
{
    "scripts": {
        "our:verify:coffeelint": "coffeelint ./source"
    }
}
```

Dropped in favour of ESNext.

### [Cyclic](https://github.com/bevry/base/wiki/Cyclic)

[Our `cyclic.js` file.](https://github.com/bevry/base/blob/34fc820c8d87f1f21706ce7e26882b6cd5437368/cyclic.js)

```shell
down https://raw.githubusercontent.com/bevry/base/34fc820c8d87f1f21706ce7e26882b6cd5437368/cyclic.js
```

Dropped in favour of npm `>=2`.

### [JSHint](http://jshint.com)

[Our `.jshintrc` file.](https://github.com/bevry/base/blob/b1335ea16811d2870dbde87c3a1a606797db54a0/.jshintrc)

```shell
down https://raw.githubusercontent.com/bevry/base/b1335ea16811d2870dbde87c3a1a606797db54a0/.jshintrc
```

Dropped in favour of [ESLint](http://eslint.org).

### [JSCS](http://jscs.info)

[Our `.jscrc` file.](https://github.com/bevry/base/blob/34fc820c8d87f1f21706ce7e26882b6cd5437368/.jscrc)

```shell
down https://raw.githubusercontent.com/bevry/base/34fc820c8d87f1f21706ce7e26882b6cd5437368/.jscrc
```

Dropped in favour of [ESLint](http://eslint.org).

## History

[View the commit history for the release history.](https://github.com/bevry/base/commits/master)

## License

Licensed under the [Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/) making it [public domain](https://en.wikipedia.org/wiki/Public_domain) so you can do whatever you wish with it without worry (you can even remove this notice!)
<br/>Copyright &copy; 2011+ [Benjamin Lupton](http://balupton.com)
