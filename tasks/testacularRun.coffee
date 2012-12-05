#
# grunt-testacular
# https://github.com/dignifiedquire/grunt-testacular
#
# Copyright (c) 2012 Friedel Ziegelmayer
# Licensed under the MIT license.
#
module.exports = (grunt) ->
  runner = require('testacular').runner
  
  grunt.registerMultiTask 'testacularRun', 'Run tests on a testacular server. ', ->
    done = @async()

    # default values
    @data.options.success ?= []
    @data.options.failure ?= []
    @data.options.always ?= []
    @data.options.nofail ?= false
    
    # run the tests
    runner.run @data, (exitCode) =>
      success = (exitCode is 0) || @data.options.nofail
      # execute optional callback tasks
      grunt.task.run if success then @data.options.success else @data.options.failure
      grunt.task.run @data.options.always
      # tell grunt that we are finished
      done success
