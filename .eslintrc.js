// 2015 November 30
// https://github.com/bevry/base
// http://eslint.org
module.exports = {
	"parser": "babel-eslint",
	"ecmaFeatures": {
		"arrowFunctions": true,
		"binaryLiterals": true,
		"blockBindings": true,
		"classes": true,
		"defaultParams": true,
		"destructuring": true,
		"forOf": true,
		"generators": true,
		"modules": true,
		"objectLiteralComputedProperties": true,
		"objectLiteralDuplicateProperties": true,
		"objectLiteralShorthandMethods": true,
		"objectLiteralShorthandProperties": true,
		"octalLiterals": true,
		"regexUFlag": true,
		"regexYFlag": true,
		"restParams": true,
		"spread": true,
		"superInFunctions": true,
		"templateStrings": true,
		"unicodeCodePointEscapes": true,
		"globalReturn": true,
		"jsx": true,
		"experimentalObjectRestSpread": true
	},
	"env": {
		"browser": true,
		"node": true,
		"es6": true,
		"commonjs": true,
		"amd": true
	},
	"rules": {
		// ----------------------------
		// Problems with these rules
		// If we can figure out how to enable the following, that would be great

		// Two spaces after one line if or else:
		// if ( blah )  return
		// Insead of one space:
		// if ( blah ) return

		// No spaces on embedded function:
		// .forEach(function(key, value){
		// instead of:
		// .forEach(function (key, value) {

		// Else and catch statements on the same line as closing brace:
		// } else {
		// } catch (e) {
		// instead of:
		// }
		// else {


		// --------------------------------------
		// Possible Errors
		// The following rules point out areas where you might have made mistakes.

		// ES6 supports dangling commas
		"comma-dangle": 0,

		// Don't allow assignments in conditional statements (if, while, etc.)
		"no-cond-assign": [2, "always"],

		// Warn but don't error about console statements
		"no-console": 1,

		// Allow while(true) loops
		"no-constant-condition": 0,

		// Seems like a good idea to error about this
		"no-control-regex": 2,

		// Warn but don't error about console statements
		"no-debugger": 1,

		// Don't allow duplicate arguments in a function, they can cause errors
		"no-dupe-args": 2,

		// Disallow duplicate keys in an object, they can cause errors
		"no-dupe-keys": 2,

		// Disallow duplicate case statements in a switch
		"no-duplicate-case": 2,

		// Disallow empty [] in regular expressions as they cause unexpected behaviour
		"no-empty-character-class": 2,

		// Allow empty block statements, they are useful for clarity
		"no-empty": 0,

		// Overwriting the exception argument in a catch statement can cause memory leaks in some browsers
		"no-ex-assign": 2,

		// Disallow superflous boolean casts, they offer no value
		"no-extra-boolean-cast": 2,

		// Allow superflous parenthesis as they offer clarity in some cases
		"no-extra-parens": 0,

		// Disallow superflous semicolons, they offer no value
		"no-extra-semi": 0,

		// Seems like a good idea to error about this
		"no-func-assign": 2,

		// Seems like a good idea to error about this
		"no-inner-declarations": 2,

		// Seems like a good idea to error about this
		"no-invalid-regexp": 2,

		// Seems like a good idea to error about this
		"no-irregular-whitespace": 2,

		// Seems like a good idea to error about this
		"no-negated-in-lhs": 2,

		// Seems like a good idea to error about this
		"no-obj-calls": 2,

		// Seems like a good idea to error about this
		// Instead of /  /  used / {2}/ instead
		"no-regex-spaces": 2,

		// Seems like a good idea to error about this
		"no-sparse-arrays": 2,

		// Seems like a good idea to error about this
		"no-unexpected-multiline": 2,

		// Seems like a good idea to error about this
		"no-unreachable": 2,

		// Seems like a good idea to error about this
		"use-isnan": 2,

		// We use YUIdoc, not JSDoc
		"valid-jsdoc": 0,

		// Seems like a good idea to error about this
		"valid-typeof": 2,


		// --------------------------------------
		// Best Practices
		// These are rules designed to prevent you from making mistakes. They either prescribe a better way of doing something or help you avoid footguns.

		// Meh
		"accessor-pairs": 0,

		// This rule seems buggy
		"block-scoped-var": 0,

		// Disable complexity checks, they are annoying and not that useful in detecting actual complexity
		"complexity": 0,

		// We use blank returns for break statements
		"consistent-return": 0,

		// Always require curly braces unless the statement is all on a single line
		"curly": [2, "multi-line"],

		// If we don't have a default cause, it probably means we should throw an error
		"default-case": 2,

		// Dots should be on the newlines
		// chainableThingy
		//   .doSomething()
		//   .doSomethingElse()
		"dot-location": [2, "property"],

		// Use dot notation where possible
		"dot-notation": 2,

		// Unless you are doing == null, then force === to avoid truthy/falsey mistakes
		"eqeqeq": [2, "allow-null"],

		// Always use hasOwnProperty when doing for in
		"guard-for-in": 2,

		// Warn about alert statements in our code
		// Use one of the suggested alternatives instead
		// Reasoning is they could be mistaken for left over debugging statements
		"no-alert": 1,

		// They are very slow
		"no-caller": 2,

		// Wow...
		"no-case-declarations": 2,

		// Seems like a good idea to error about this
		"no-div-regex": 2,

		// Returns in else statements offer code clarity, so disable this rule
		"no-else-return": 0,

		// Seems like a good idea to error about this
		"no-empty-label": 2,

		// Seems sensible
		"no-empty-pattern": 2,

		// We know that == null is a null and undefined check
		"no-eq-null": 0,

		// Eval is slow and unsafe, use vm's instead
		"no-eval": 2,

		// There is never a good reason for this
		"no-extend-native": 2,

		// Don't allow useless binds
		"no-extra-bind": 2,

		// Don't allow switch case statements to follow through, use continue keyword instead
		"no-fallthrough": 2,

		// Use zero when doing decimals, otherwise it is confusing
		"no-floating-decimal": 2,

		// Cleverness is unclear
		"no-implicit-coercion": 2,

		// A sneaky way to do evals
		"no-implied-eval": 2,

		// We sometimes use this for binds, so warn but not error
		"no-invalid-this": 1,

		// Use proper iterators instead
		"no-iterator": 2,

		// We never use this, it seems silly to allow this
		"no-labels": 2,

		// We never use this, it seems silly to allow this
		"no-lone-blocks": 2,

		// Loop functions always cause problems, as the scope isn't clear through iterations
		"no-loop-func": 2,

		// This is a great idea
		"no-magic-numbers": 2,

		// We like multi spaces for clarity
		// E.g. We like
		// if ( blah )  return foo
		// Instead of:
		// if ( blah ) return foo
		// @TODO would be great to enforce the above
		"no-multi-spaces": 0,

		// Use ES6 template strings instead
		"no-multi-str": 2,

		// Would be silly to allow this
		"no-native-reassign": 2,

		// We never use this, it seems silly to allow this
		"no-new-func": 2,

		// We never use this, it seems silly to allow this
		"no-new-wrappers": 2,

		// We never use this, it seems silly to allow this
		"no-new": 2,

		// We never use this, it seems silly to allow this
		"no-octal-escape": 2,

		// We never use this, it seems silly to allow this
		"no-octal": 2,

		// Warn for awareness but don't enforce
		"no-param-reassign": 1,

		// We use process.env wisely
		"no-process-env": 0,

		// We never use this, it seems silly to allow this
		"no-proto": 2,

		// We never use this, it seems silly to allow this
		"no-redeclare": 2,

		// We never use this, it seems silly to allow this
		"no-return-assign": 2,

		// We never use this, it seems silly to allow this
		"no-script-url": 2,

		// We never use this, it seems silly to allow this
		"no-self-compare": 2,

		// We never use this, it seems silly to allow this
		"no-sequences": 2,

		// We always want proper error objects as they have stack traces and respond to instanceof Error checks
		"no-throw-literal": 2,

		// We never use this, it seems silly to allow this
		"no-unused-expressions": 2,

		// Seems sensible
		"no-useless-call": 2,

		// Seems sensible
		"no-useless-concat": 2,

		// We never use this, it seems silly to allow this
		"no-void": 2,

		// Warn about todos
		"no-warning-comments": [1, { "terms": ["todo", "fixme"], "location": "anywhere" }],

		// We never use this, it seems silly to allow this
		"no-with": 2,

		// Always specify a radix to avoid errors
		"radix": 2,

		// We appreciate the clarity late defines offer
		"vars-on-top": 0,

		// Wrap instant called functions in parenthesis for clearer intent
		"wrap-iife": 2,

		// Because we force === and never allow assignments in conditions
		// we have no need for yoda statements, so disable them
		"yoda": [2, "never"],


		// --------------------------------------
		// Strict Mode
		// These rules relate to using strict mode.

		// Force strict mode in the global scope as we want it everywhere
		"strict": 0,
		// Off because when using ES6 in modules, "use strict" is necessary, but eslint complains about it


		// --------------------------------------
		// Variables
		// These rules have to do with variable declarations.

		// We don't care
		"init-declaration": 0,

		// Don't allow the catch method to shadow objects as browsers handle this differently
		// Update: We don't care for IE8
		"no-catch-shadow": 0,

		// Don't use delete, it disables optimisations
		"no-delete-var": 2,

		// We never use this, it seems silly to allow this
		"no-label-var": 2,

		// We never use this, it seems silly to allow this
		"no-shadow-restricted-names": 2,

		// We use shadowing
		"no-shadow": 0,

		// Makes sense
		"no-undef-init": 2,

		// Error when an undefined variable is used
		"no-undef": 2,

		// typeof blah === 'undefined' should always be used
		"no-undefined": 2,

		// Warn us when we don't use something
		"no-unused-vars": 1,

		// Error when we try and use something before it is defined
		"no-use-before-define": 2,


		// --------------------------------------
		// Node.js and CommonJS
		// These rules are specific to JavaScript running on Node.js or using CommonJS in the browser.

		// Seems to difficult to enforce
		"callback-return": 0,

		// We use require where it is appropriate to use it
		"global-require": 0,

		// Force handling of callback errors
		"handle-callback-err": 2,

		// @TODO decide if this is good or not
		"no-mixed-requires": 2,

		// Disallow error prone syntax
		"no-new-require": 2,

		// Always use path.join for windows support
		"no-path-concat": 2,

		// We know what we are doing
		"no-process-exit": 0,

		// No need for this rule
		"no-restricted-modules": 0,

		// Sometimes sync methods are useful, so warn but don't error
		"no-sync": 1,


		// --------------------------------------
		// Stylistic
		// These rules are purely matters of style and are quite subjective.

		// We don't use spaces with brackets
		"array-bracket-spacing": [2, "never"],

		// Disallow or enforce spaces inside of single line blocks
		"block-spacing": [2, "always"],

		// Opening brace on same line, closing brace on its own line, except when statement is a single line
		"brace-style": [2, "stroustrup", { "allowSingleLine": true }],

		// Use camel case
		"camelcase": 2,

		// Require a comma after always
		"comma-spacing": [2, {"before": false, "after": true}],

		// Commas go last, we have tooling to detect if we forget a comma
		"comma-style": [2, "last"],

		// Require or disallow padding inside computed properties
		"computed-property-spacing": [2, "never"],

		// Enabling this was incredibly annoying when doing layers of nesting
		"consistent-this": 0,

		// Enable to make UNIX people's lives easier
		"eol-last": 2,

		// We like anonymous functions
		"func-names": 0,

		// Prefer to define functions via variables
		"func-style": [1, "declaration"],

		// Sometimes short names are appropriate
		"id-length": 0,

		// Camel case handles this for us
		"id-match": 0,

		// Use tabs and indent case blocks
		"indent": [2, "tab", {"SwitchCase": 1}],

		// Prefer double qoutes for JSX properties: <a b="c" />, <a b='"' />
		"jsx-quotes": [2, "prefer-double"],

		// Space after the colon
		"key-spacing": [2, {
			"beforeColon": false,
			"afterColon": true
		}],

		// Enforce unix line breaks
		"linebreak-style": [2, "unix"],

		// Enforce new lines before block comments
		"lines-around-comment": [2, { "beforeBlockComment": true, "allowBlockStart": true } ],

		// Disabled to ensure consistency with complexity option
		"max-depth": 0,

		// We use soft wrap
		"max-len": 0,

		// We are smart enough to know if this is bad or not
		"max-nested-callbacks": 0,

		// Sometimes we have no control over this for compat reasons, so just warn
		"max-params": [1, 4],

		// We should be able to use whatever feels right
		"max-statements": 0,

		// Constructors should be CamelCase
		"new-cap": 2,

		// Always use parens when instantiating a class
		"new-parens": 2,

		// We do this
		"newline-after-var": [2, "always"],

		// Don't use the array constructor when it is not needed
		"no-array-constructor": 2,

		// We never use bitwise, they are too clever
		"no-bitwise": 2,

		// We use continue
		"no-continue": 0,

		// We like inline comments
		"no-inline-comments": 0,

		// The code could be optimised if this error occurs
		"no-lonely-if": 2,

		// Don't mix spaces and tabs
		// @TODO maybe [2, "smart-tabs"] will be better, we will see
		"no-mixed-spaces-and-tabs": 2,

		// We use multiple empty lines for styling
		"no-multiple-empty-lines": 0,

		// Sometimes it is more understandable with a negated condition
		"no-negated-condition": 0,

		// Sometimes these are useful
		"no-nested-ternary": 0,

		// Use {} instead of new Object()
		"no-new-object": 2,

		// We use plus plus
		"no-plusplus": 0,

		// Handled by other rules
		"no-restricted-syntax": 0,

		// We never use this, it seems silly to allow this
		"no-spaced-func": 2,

		// Sometimes ternaries are useful
		"no-ternary": 0,

		// Disallow trailing spaces
		"no-trailing-spaces": 2,

		// Sometimes this is useful when avoiding shadowing
		"no-underscore-dangle": 0,

		// Sensible
		"no-unneeded-ternary": 2,

		// We want to do this
		"object-curly-spacing": [2, "always"],

		// We like multiple var statements
		"one-var": 0,

		// Force use of shorthands when available
		"operator-assignment": [2, "always"],

		// Should be before, but not with =, *=, /=, += lines
		// @TODO figure out how to enforce
		"operator-linebreak": 0,

		// This rule doesn't appear to work correclty
		"padded-blocks": 0,

		// Seems like a good idea to error about this
		"quote-props": [2, "consistent-as-needed"],

		// Use single quotes where escaping isn't needed
		"quotes": [2, "single", "avoid-escape"],

		// We use YUIdoc
		"require-jsdoc": 0,

		// If semi's are used, then add spacing after
		"semi-spacing": [2, {"before": false, "after": true}],

		// Never use semicolons
		"semi": [2, "never"],

		// We don't care if our vars are alphabetical
		"sort-vars": 0,

		// Always force a space after a keyword
		"space-after-keywords": [2, "always"],

		// Always force a space before a {
		"space-before-blocks": [2, "always"],

		// function () {, get blah () {
		"space-before-function-paren": [2, "always"],

		// We do this
		"space-before-keywords": [2, "always"],

		// This is for spacing between [], so [ 1, 2, 3 ] which we don't want
		"space-in-brackets": 0,

		// This is for spacing between (), so doSomething( 1, 2, 3 ) or if ( 1 === 3 )
		// which we want for ifs, but don't want for calls
		"space-in-parens": 0,

		// We use this
		"space-infix-ops": 2,

		// We use this
		"space-return-throw-case": 2,

		// We use this
		"space-unary-ops": 2,

		// We use this
		// "spaced-line-comment": 2,
		"spaced-comment": 2,

		// We use this
		// @TODO revise this
		"wrap-regex": 2,


		// --------------------------------------
		// ECMAScript 6

		// Sensible to create more informed and clear code
		"arrow-body-style": [2, "as-needed"],

		// We do this, no reason why, just what we do
		"arrow-parens": [2, "always"],

		// Require consistent spacing for arrow functions
		"arrow-spacing": 2,

		// Makes sense as otherwise runtime error will occur
		"constructor-super": 2,

		// Seems the most consistent location for it
		"generator-star-spacing": [2, "before"],

		// Seems sensible
		"no-arrow-condition": 2,

		// Seems sensible
		"no-class-assign": 2,

		// Makes sense as otherwise runtime error will occur
		"no-const-assign": 2,

		// Makes sense as otherwise runtime error will occur
		"no-dupe-class-members": 2,

		// Makes sense as otherwise runtime error will occur
		"no-this-before-super": 2,

		// @TODO This probably should be an error
		// however it is useful for: for ( var key in obj ) {
		// which hopefully is more performant than let (@TODO check if it actually is more performant)
		"no-var": 1,

		// Enforce ES6 object shorthand
		"object-shorthand": 2,

		// Sure, why not
		"prefer-arrow-callback": 2,

		// Sure, why not
		"prefer-const": 1,

		// Controversial change, but makes sense to move towards to reduce the risk of bad people overwriting apply and call
		// https://github.com/eslint/eslint/issues/2939
		"prefer-reflect": 1,

		// Sure, why not
		"prefer-spread": 2,

		// Makes sense to move towards
		"prefer-template": 1,

		// Makes sense
		"require-yield": 2
	}
}
