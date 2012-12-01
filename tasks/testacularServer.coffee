#
# grunt-testacular
# https://github.com/dignifiedquire/grunt-testacular
#
# Copyright (c) 2012 Friedel Ziegelmayer
# Licensed under the MIT license.
#
module.exports = (grunt) ->
  server = require('testacular').server
  
  grunt.registerMultiTask 'testacularServer', 'Starts up a testacular server.', ->
    done = @async()
    
    # default values
    @data.options ?= {}
    @data.options.keepalive ?= false
    @data.options.success ?= []
    @data.options.failure ?= []
    @data.options.always ?= []
    @data.configFile = grunt.template.process @data.configFile if @data.configFile

    # start the testacular server
    server.start @data, (exitCode, exit) =>
      success = (exitCode is 0)
      # execute optional callback tasks
      grunt.task.run if success then @data.options.success else @data.options.failure
      grunt.task.run @data.options.always
      # tell grunt that we are finished
      done success
    
    
    # unless the keepalive option is set we are finished
    done() unless @data.options.keepalive

