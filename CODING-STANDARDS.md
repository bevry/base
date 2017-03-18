# Coding Standards

Short URL: `https://learn.bevry.me/community/coding-standards/`


## All languages


### Spelling

US English should be used within your code. This is because the majority of modules are written in US English and it would cause useless inconsistencies in your code if in some places you used `color` and others `colour`.


### Indentation

Tabs should be used for indentation. This is because:

1. Tabs allow _everyone_ who uses your code to view it with their ideal indentation size.
2. Tabs help prevent incorrect indentation that can cause unsightly code as well as errors in indentation based languages. (A missing space is very difficult to notice.)


### Column Alignment

Spaces (not tabs) should be used for column alignment. This is because:

1. Tabs can align to different columns depending on the users configuration, which will misalign columns in some configurations.
2. Spaces will always be displayed the same.

As for when to use or not to use Column Alignment, refer to the following:

#### Without Column Alignment

```
one: 1
two: 2
three: 3
```

Best for when faster reading/cognition of row-by-row data is desired. Within code this is generally the vast majority of cases: e.g. key-value-pairs.


#### With Column Alignment

``` coffeescript
one:    1
two:    2
three:  3
```

Best for when faster reading/cognition of column-by-column is desired. Within text this is generally the vast majority of cases: e.g. presenting table data. Align using spaces.


### Naming Convention

Class names should be CamelCase, while everything else should be camelCase. Acronyms and initialisims should be capitalized.


``` coffeescript
class JSONHandler
	toJSON: ->

jsonHandler = new JSONHandler()
jsonHandler.toJSON()
```



### Code Structure & Commenting

#### JavaDoc Format

Utilization of the JavaDoc format is decided per-project.


#### Sections

``` coffeescript
# =====================================
# Main Section

# -------------------------------------
# Sub Section

# Group
...
```

Sections are used to indicate when the context of the code has changed, for instance grouping of particular functions or logic. Sections have two main advantages, they increase the speed of noticing and understanding context changes, as well as increasing the speed of cognition - without having to actually read any code.

The main sections and sub sections utilise a horizontal rule. The last part of the horizontal rule should always lay on the 40th column. The headings should be concise (only a few words max)

Example:

``` coffeescript
# =====================================
# DocPad Class

class DocPad

	# ---------------------------------
	# Variables

	# OutPath
	outPath: '...'

	# ---------------------------------
	# Construction & Initialization

	# Constructor
	constructor: ->
		# Prepare
		me = @

		# Log
		console.log('We are now constructing')

		# Chain
		@
	
	# Is Valid
	isValid: ->
		# Return
		true

```



## CoffeeScript

[Find our latest CoffeeScript lint configuration on `bevry/base`.](https://github.com/bevry/base)

### Parentheses

Use parentheses as much as possible, especially when:

- when the function call accepts only a few arguments, e.g. `complete(err)`
- when the function call is before another statement, e.g. `return fatal(err)  if err`
- when the function call utilises the `?` operator, e.g. `next?(err)`

Occasionally it is okay to not use them, such as when:

- the function call utilises a single inline callback which is the last argument: `path.exists __filename, (exists) ->`
- the function call accepts unlimited arguments: `console.log "Hello"`


### Returning Values from Functions

Each function should have an explicit return. If there's no obvious return value, and the function is an OO method, return `this` or `self` to be used for chaining method calls. If you wish to utilise CoffeeScripts automatic return ability, then a comment stating you are using this should be used each time.


## JavaScript

[Find our latest JavaScript lint configuration on `bevry/base`.](https://github.com/bevry/base)

## Language Selection

Bevry has standardized on ES6 for all its projects, though CoffeeScript is still used for the DocPad projects. In good time, DocPad will also migrate from CoffeeScript to ES6, with modules first, plugins second, and core third.

Bevry uses [Babel](https://babeljs.io) to precompile ES6 to ES5 before publishing. Both the ES6 and ES5 versions of the package will be published. This workflow is automated by our [Bevry Base Files](https://github.com/bevry/base).


### Reasons for Using CoffeeScript (Historical)

For historical reasons, we mention here our arguments for using CoffeeScript. These apply to some degree to using ES6 over ES5, as well.

> The biggest complaint we hear about the use of CoffeeScript is it reduces contributors. We feel this is an artificial complaint, here's why.

> - [Unix Philosophy](http://en.wikipedia.org/wiki/Unix_philosophy): Rule of Generation: Developers should avoid writing code by hand and instead write abstract high-level programs that generate code. This rule aims to reduce human error and save time.
- CoffeeScript includes built-in high-level standard ways to do classes, for in loops, for of loops, bindings, etc.
- In JavaScript you often find yourself writing  unnecessarily complex code that increases risk of error and decreases code readability and portability, or including a library like underscore that offers features similar to CoffeeScript (and has a similar learning curve).
- The CoffeeScript community has fewer different commonly-used options for coding style as compared to JavaScript. This means fewer  arguments about which libaries and class systems to use, which coding standards to use for for semicolons, commas, etc. etc. Arguments such as these  add unnecessary noise in the community and reduce effectiveness, efficiency and contributions to the project.  CoffeeScript is easy to learn (half a day for the basics; a week for mastery) and avoids these JavaScript problems.
- If we were to implement DocPad in JavaScript, we'd still be arguing to this day, which class system we should use

[More information on our move from CoffeeScript to ES6 here.](https://discuss.bevry.me/t/move-from-coffeescript-to-es6/30?u=balupton)


## Semantic Versioning

Bevry abides by [semantic versioning principles](http://semver.org/), that is to say:

- Major releases `v1`, contain breaking changes for everyone
- Minor releases `v1.1`, contain breaking changes for some people
- Patch releases `v1.1.1`, contain no breaking changes

When specifying dependencies, we will use the `~` operator at the start of the version number to allow upgrades to new patch releases only within the same minor release. E.g., `~1.3.2` allows versions from `1.3.2` up to, but not including, `1.4.0`.

We don't allow new minor versions to be automatically installed because doing so could mean that things break when the project is re-installed. Re-installs often happen when doing a production deployment, a new person installs your project, or simply when you come back to you project after a period of inactivity.

Though minor relases are supposed to be backwards compatible with previous minor releases in the major release, we found through experience that this is frequently not actually the case. See [npm issue #4587](https://github.com/npm/npm/issues/4587) for further discussion of this.


## Package Managers & Module Loaders

Bevry publishes modules only to the [npm registry](https://www.npmjs.com/).

We no longer support the [component](https://github.com/componentjs/component) and [Bower](http://bower.io/) package managers. The reasons for this are:
0. They introduce extra complexity by not having any stance on which module loader you should use.
0. Extra support (such as [UMD header definitions](https://github.com/docpad/docpad-plugin-umd#usage)) was required for the module loaders AMD, Require.js, and Global Namespacing (aka none).
0. The testing and support load was increased significantly, and in particular it's inconvenient to write automated tests to ensure that the library loads properly in each different package management system and load environment.
0. Component and Bower both use Git repositories as their registry, meaning that you must bundle the production distribution of your package with your source files in your Git repository. This makes your Git repository get quite large and pollutes the change history.

With the commonjs, npm, browserify, and ender solution you publish only your production files to the npm registry, not your source files. This has the benefit of not polluting your repository's size and changelogs with production files. You also can still install things even if GitHub goes down (which happens a bit).

NPM + Browserify offer a lot of control over your packages, and you can even [add UMD headers to them at compile time](http://dontkry.com/posts/code/browserify-and-the-universal-module-definition.html) if you must. However UMD misses out on the amazing benefit of the beautiful simplicity of commonjs. Importing a module is as easy as `require('module-name')` and you never have to worry about version conflicts either (something that component users do have to worry about).

Ender also makes it easy for people who don't need the control (and complexity) of the npm + browserify solution to easily be able to bundle and add libraries together into a production ready build file.

But for those who want the ultimate simplicity, tools like [wzrd.in](http://wzrd.in) and [requirebin](http://requirebin.com/) allow you to easily just create CDN ready distros of commonjs npm published modules right away, for instant inclusion in your application. Awesome.

So for all those reasons, we feel the commonjs utility belt of npm, browserify, ender, wzrd.in and requirebin, is the ultimate solution. Whereas solutions like AMD, Require.js, bower and component, just cause headaches.
