# 5 April 2015
# https://github.com/bevry/base


# =====================================
# Imports

fsUtil = require('fs')
pathUtil = require('path')


# =====================================
# Variables

WINDOWS          = process.platform.indexOf('win') is 0
NODE             = process.execPath
NPM              = (if WINDOWS then process.execPath.replace('node.exe', 'npm.cmd') else 'npm')
EXT              = (if WINDOWS then '.cmd' else '')
GIT              = "git"

APP_PATH         = process.cwd()
PACKAGE_PATH     = pathUtil.join(APP_PATH, "package.json")
PACKAGE_DATA     = require(PACKAGE_PATH)

MODULES_PATH     = pathUtil.join(APP_PATH, "node_modules")
DOCPAD_PATH      = pathUtil.join(MODULES_PATH, "docpad")
CAKE             = pathUtil.join(MODULES_PATH, ".bin", "cake")
COFFEE           = pathUtil.join(MODULES_PATH, ".bin", "coffee")
PROJECTZ         = pathUtil.join(MODULES_PATH, ".bin", "projectz")
DOCCO            = pathUtil.join(MODULES_PATH, ".bin", "docco")
DOCPAD           = pathUtil.join(MODULES_PATH, ".bin", "docpad")
BISCOTTO         = pathUtil.join(MODULES_PATH, ".bin", "biscotto")
YUIDOC           = pathUtil.join(MODULES_PATH, ".bin", "yuidoc")
BABEL            = pathUtil.join(MODULES_PATH, ".bin", "babel")
ESLINT           = pathUtil.join(MODULES_PATH, ".bin", "eslint")

config = {}
config.TEST_COMMAND        = null
config.BROWSERIFY_COMMAND  = null
config.TEST_PATH           = "test"
config.DOCCO_SRC_PATH      = null
config.DOCCO_OUT_PATH      = "docs"
config.BISCOTTO_SRC_PATH   = null
config.BISCOTTO_OUT_PATH   = "docs"
config.YUIDOC_SRC_PATH     = null
config.YUIDOC_OUT_PATH     = "docs"
config.COFFEE_SRC_PATH     = null
config.COFFEE_OUT_PATH     = "out"
config.DOCPAD_SRC_PATH     = null
config.DOCPAD_OUT_PATH     = "out"
config.BABEL_SRC_PATH      = null
config.BABEL_OUT_PATH      = "es5"
config.ESLINT_SRC_PATH     = null

for own key,value of (PACKAGE_DATA.cakeConfiguration or {})
	config[key] = value

#for own key,value of config
#	config[key] = pathUtil.resolve(APP_PATH, value)  if value
# ^ causes issues with biscotto, as it just wants relative paths


# =====================================
# Generic

child_process = require('child_process')

spawn = (command, args, opts) ->
	if opts.output is true
		console.log(command, args.join(' '))
		opts.stdio = 'inherit'
	return child_process.spawn(command, args, opts)
exec = (command, opts, next) ->
	if opts.output is true
		console.log(command)
		return child_process.exec command, opts, (err, stdout, stderr) ->
			console.log(stdout)
			console.log(stderr)
			next()
	else
		return child_process.exec(command, opts, next)

safe = (next,fn) ->
	next ?= (err) -> console.error(err.stack ? err)
	fn ?= next  # support only one argument
	return (err) ->
		# success status code
		if err is 0
			err = null

		# error status code
		else if err is 1
			err = new Error('Process exited with error status code')

		# Error
		return next(err)  if err

		# Continue
		return fn()

finish = (error) ->
	if error
		process.stderr.write( (error.stack ? error) + '\n' )
		throw error
	else
		process.stdout.write('OK\n')

steps = (next, steps) ->
	step = 0

	complete = (error) ->
		# success status code
		if error is 0
			error = null

		# error status code
		else if error is 1
			error = new Error('Process exited with error status code')

		# Error
		if error
			next(error)
		else
			++step
			if step isnt steps.length
				steps[step](complete)
			else
				next()

	steps[step](complete)


# =====================================
# Actions

actions =
	clean: (opts,next) ->
		# Steps
		steps(next, [
			(complete) ->
				console.log('\nclean:')

				# Prepare rm args
				args = ['-Rf']

				# Add compilation paths to args
				for own key, value of config
					if key.indexOf('OUT_PATH') isnt -1
						args.push(value)

				# Add common ignore paths to args
				for path in [APP_PATH, config.TEST_PATH]
					args.push(
						pathUtil.join(path,  'build')
						pathUtil.join(path,  'components')
						pathUtil.join(path,  'bower_components')
						pathUtil.join(path,  'node_modules')
						pathUtil.join(path,  '*out')
						pathUtil.join(path,  '*log')
						pathUtil.join(path,  '*heapsnaphot')
						pathUtil.join(path,  '*cpuprofile')
					)

				# rm
				spawn('rm', args, {output:true, cwd:APP_PATH}).on('close', complete)
		])

	prepare: (opts,next) ->
		# Steps
		steps(next, [
			(complete) ->
				console.log('\nnpm install (for app):')
				spawn(NPM, ['install'], {output:true, cwd:APP_PATH}).on('close', complete)
			(complete) ->
				return complete()  if !config.TEST_PATH or !fsUtil.existsSync(config.TEST_PATH)
				console.log('\nnpm install (for test):')
				spawn(NPM, ['install'], {output:true, cwd:config.TEST_PATH}).on('close', complete)
			(complete) ->
				return complete()  if !fsUtil.existsSync(DOCPAD_PATH)
				console.log('\nnpm install (for docpad tests):')
				spawn(NPM, ['install'], {output:true, cwd:DOCPAD_PATH}).on('close', complete)
		])

	compile: (opts,next) ->
		# Steps
		steps(next, [
			(complete) ->
				console.log('\ncake prepare')
				actions.prepare(opts, complete)
			(complete) ->
				return complete()  if !config.COFFEE_SRC_PATH or !fsUtil.existsSync(COFFEE)
				console.log('\ncoffee compile:')
				spawn(NODE, [COFFEE, '-co', config.COFFEE_OUT_PATH, config.COFFEE_SRC_PATH], {output:true, cwd:APP_PATH}).on('close', complete)
			(complete) ->
				return complete()  if !config.BABEL_SRC_PATH or !fsUtil.existsSync(BABEL)
				console.log('\nbabel compile:')
				spawn(NODE, [BABEL, config.BABEL_SRC_PATH, '--out-dir', config.BABEL_OUT_PATH], {output:true, cwd:APP_PATH}).on('close', complete)
			(complete) ->
				return complete()  if !config.DOCPAD_SRC_PATH or !fsUtil.existsSync(DOCPAD)
				console.log('\ndocpad generate:')
				spawn(NODE, [DOCPAD, 'generate'], {output:true, cwd:APP_PATH}).on('close', complete)
		])

	watch: (opts,next) ->
		# Steps
		steps(next, [
			(complete) ->
				console.log('\ncake prepare')
				actions.prepare(opts, complete)
			(complete) ->
				return complete()  if !config.BABEL_SRC_PATH or !fsUtil.existsSync(BABEL)
				console.log('\nbabel compile:')
				spawn(NODE, [BABEL, '-w', config.BABEL_SRC_PATH, '--out-dir', config.BABEL_OUT_PATH], {output:true, cwd:APP_PATH}).on('close', complete)
			(complete) ->
				return complete()  if !config.COFFEE_SRC_PATH or !fsUtil.existsSync(COFFEE)
				console.log('\ncoffee watch:')
				spawn(NODE, [COFFEE, '-wco', config.COFFEE_OUT_PATH, config.COFFEE_SRC_PATH], {output:true, cwd:APP_PATH}).on('close', safe)  # background
				complete()  # continue while coffee runs in background
			(complete) ->
				return complete()  if !config.DOCPAD_SRC_PATH or !fsUtil.existsSync(DOCPAD)
				console.log('\ndocpad run:')
				spawn(NODE, [DOCPAD, 'run'], {output:true, cwd:APP_PATH}).on('close', safe)  # background
				complete()  # continue while docpad runs in background
		])

	test: (opts,next) ->
		# Steps
		steps(next, [
			(complete) ->
				console.log('\ncake compile')
				actions.compile(opts, complete)
			(complete) ->
				console.log('\neslint:')
				spawn(ESLINT, [config.ESLINT_SRC_PATH], {output:true, cwd:APP_PATH}).on('close', complete)
			(complete) ->
				complete(new Error('package.json:cakeConfiguration.TEST_COMMAND not defined'))  unless config.TEST_COMMAND
				console.log('\ntest:')
				exec(config.TEST_COMMAND, {output:true, cwd:APP_PATH}).on('close', complete)
		])

	prepublish: (opts,next) ->
		# Steps
		steps(next, [
			(complete) ->
				console.log('\ncake compile')
				actions.compile(opts, complete)
			(complete) ->
				return complete()  if !config.DOCCO_SRC_PATH or !fsUtil.existsSync(DOCCO)
				console.log('\ndocco compile:')
				command = "#{NODE} #{DOCCO} -o #{config.DOCCO_OUT_PATH} #{config.DOCCO_SRC_PATH}"
				exec(command, {output:true, cwd:APP_PATH}, complete)
			(complete) ->
				return complete()  if !config.BISCOTTO_SRC_PATH or !fsUtil.existsSync(BISCOTTO)
				console.log('\nbiscotto compile:')
				command = """#{BISCOTTO} -n #{PACKAGE_DATA.title or PACKAGE_DATA.name} --title "#{PACKAGE_DATA.title or PACKAGE_DATA.name} API Documentation" -r README.md -o #{config.BISCOTTO_OUT_PATH} #{config.BISCOTTO_SRC_PATH} - LICENSE.md HISTORY.md"""
				exec(command, {output:true, cwd:APP_PATH}, complete)
			(complete) ->
				return complete()  if !fsUtil.existsSync(YUIDOC)
				console.log('\nyuidoc compile:')
				command = [YUIDOC]
				command.push('-o', config.YUIDOC_OUT_PATH)  if config.YUIDOC_OUT_PATH
				command.push(config.YUIDOC_SRC_PATH)  if config.YUIDOC_SRC_PATH
				spawn(NODE, command, {output:true, cwd:APP_PATH}).on('close', complete)
			(complete) ->
				return complete()  if !fsUtil.existsSync(PROJECTZ)
				console.log('\nprojectz compile')
				spawn(NODE, [PROJECTZ, 'compile'], {output:true, cwd:APP_PATH}).on('close', complete)
			(complete) ->
				console.log('\ncake test')
				actions.test(opts, complete)
		])

	publish: (opts,next) ->
		# Steps
		steps(next, [
			(complete) ->
				console.log('\nnpm publish:')
				spawn(NPM, ['publish'], {output:true, cwd:APP_PATH}).on('close', complete)
				# ^ npm will run prepublish and postpublish for us
		])

	postpublish: (opts,next) ->
		# Steps
		steps(next, [
			(complete) ->
				console.log('\ngit tag:')
				spawn(GIT, ['tag', 'v'+PACKAGE_DATA.version, '-a'], {output:true, cwd:APP_PATH}).on('close', complete)
			(complete) ->
				console.log('\ngit push origin master:')
				spawn(GIT, ['push', 'origin', 'master'], {output:true, cwd:APP_PATH}).on('close', complete)
			(complete) ->
				console.log('\ngit push tags:')
				spawn(GIT, ['push', 'origin', '--tags'], {output:true, cwd:APP_PATH}).on('close', complete)
		])


# =====================================
# Commands

commands =
	clean:       'clean up instance'
	setup:       'prepare project for setup'
	compile:     'compile our files (includes setup)'
	watch:       'compile our files initially, and again for each change (includes setup)'
	test:        'run our tests (includes compile)'
	prepublish:  'prepare our project for publishing'
	publish:     'publish our project using npm'
	postpublish: 'prepare our project after publishing'

Object.keys(commands).forEach (key) ->
	description = commands[key]
	fn = actions[key]
	task key, description, (opts) ->  fn(opts, finish)
