<!--
April 5, 2015
https://github.com/bevry/base
-->


# Contribute


## Resources

- [Contributing Guide](https://learn.bevry.me/community/contribute)
	- [Coding Standards](http://learn.bevry.me/community/coding-standards)
	- [Support Channels](https://discuss.bevry.me/t/official-bevry-support-channels/63)
		- [Stack Overflow](https://discuss.bevry.me/t/stack-overflow-support/61/1)
		- [Problems](https://discuss.bevry.me/c/problems)
		- [Suggestions](https://discuss.bevry.me/c/suggestions)
		- [Guides](https://discuss.bevry.me/c/guides)
		- [Gitter](https://discuss.bevry.me/t/gitter-chat-rooms/58/1)
		- [IRC](https://discuss.bevry.me/t/irc-chat-rooms/54/1)
		- GitHub Issues is not one of our support channels, please use one of the above instead.


## Development

For developers and contributors


### Setup

1. Install [Node.js](/node/install)

1. Fork the project and clone your fork - [guide](https://help.github.com/articles/fork-a-repo/)

1. Install local dependencies

    ``` bash
    npm install
    ```

1. Perform any other setup operations

    ``` bash
    npm run-script setup
    ```


### Developing

- Compiling changes

	``` bash
	# Only once
	npm run-script compile

	# On every change
	npm run-script watch
	```

5. Run tests

	``` bash
	npm test
	```


### Publishing

Follow these steps in order to implement your changes/improvements into your desired project:


#### Preparation

1. Make sure your changes are on their own branch that is branched off from master.
    1. You can do this by: `git checkout master; git checkout -b your-new-branch`
    1. And push the changes up by: `git push origin your-new-branch`

1. Ensure all tests pass:

    ``` bash
    cake test
    ```

    > If possible, add tests for your change, if you don't know how, mention this in your pull request

1. Ensure the project is ready for publishing:

    ```
    git status
    git diff
    npm run-script prepublish
    ```


#### Pull Request

To send your changes for the project owner to merge in:

1. Submit your pull request
    1. When submitting, if the original project has a `dev` or `integrate` branch, use that as the target branch for your pull request instead of the default `master`
    1. By submitting a pull request you agree for your changes to have the same license as the original plugin


#### Publish

To publish your changes as the project owner:

1. Switch to the master branch:

    ``` bash
    git checkout master
    ```

1. Merge in the changes of the feature branch (if applicable)

1. Increment the version number in the `package.json` file according to the [semantic versioning](http://semver.org) standard, that is:
    1. `x.0.0` MAJOR version when you make incompatible API changes (note: DocPad plugins must use v2 as the major version, as v2 corresponds to the current DocPad v6.x releases)
    1. `x.y.0` MINOR version when you add functionality in a backwards-compatible manner
    1. `x.y.z` PATCH version when you make backwards-compatible bug fixes

1. Add an entry to the changelog following the format of the previous entries, an example of this is:

    ``` markdown
    - v6.29.0 April 1, 2013
        - Progress on [issue #474](https://github.com/bevry/docpad/issues/474)
        - DocPad will now set permissions based on the process's ability
            - Thanks to [Avi Deitcher](https://github.com/deitch), [Stephan Lough](https://github.com/stephanlough) for [issue #165](https://github.com/bevry/docpad/issues/165)
        - Updated dependencies
    ```


1. Commit the changes with the commit title set to something like `v6.29.0. Bugfix. Improvement.` and commit description set to the changelog entry


1. Ensure the project is ready for publishing:

    ```
    git status
    git diff
    npm run-script prepublish
    ```

1. Publish the module:

    ``` bash
    npm publish
    ```

    Due to our hooks, this will also:

    1. Runs the `prepublish` script which compiles any meta files
    1. Runs the `publish` script which will create a git tag for the release, as well as push our `master` branch changes up and the new git tag up to the remote `origin`
        1. A prompt will occur asking you for a git tag annotation, enter the changelog entry that we created earlier, save and exit the prompt.
