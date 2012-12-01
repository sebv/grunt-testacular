module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      build: {
        options: {
          bare: true
        },
        files: {
          'tasks/*.js': 'tasks/*.coffee'
        }
      }
    },
    watch: {
      files: ['tasks/*.coffee'],
      tasks: 'default'
    },
    testacularServer: {
      simple: {
        configFile: 'test/testacular.conf.js',
        options: {
          keepalive: true
        }
      },
      optional_single: {
        configFile: 'test/testacular.conf.js',
        singleRun: true,
        options: {
          keepalive: true,
          success: 'success',
          failure: 'failure',
          always: 'always'
        }
      },
      optional: {
        configFile: 'test/testacular.conf.js',
        options: {
          keepalive: true
        }
      }
    },
    testacularRun: {
      simple: {
        runnerPort: 9101
      },
      optional: {
        runnerPort: 9101,
        options: {
          success: 'success',
          failure: 'failure',
          always: 'always'
        }
      }
    }
  });

  // Success task
  grunt.registerTask('success', function(){
    grunt.log.writeln('Success');
  });

  // Failure task
  grunt.registerTask('failure', function(){
    grunt.log.writeln('Failure');
  });

  // Always task
  grunt.registerTask('always', function(){
    grunt.log.writeln('Always');
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Load dependencies.
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Default task.
  grunt.registerTask('default', 'coffee watch');
};