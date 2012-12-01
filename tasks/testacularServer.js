
module.exports = function(grunt) {
  var server;
  server = require('testacular').server;
  return grunt.registerMultiTask('testacularServer', 'Starts up a testacular server.', function() {
    var done, _base, _base1, _base2, _base3, _base4, _ref, _ref1, _ref2, _ref3, _ref4,
      _this = this;
    done = this.async();
    if ((_ref = (_base = this.data).options) == null) {
      _base.options = {};
    }
    if ((_ref1 = (_base1 = this.data.options).keepalive) == null) {
      _base1.keepalive = false;
    }
    if ((_ref2 = (_base2 = this.data.options).success) == null) {
      _base2.success = [];
    }
    if ((_ref3 = (_base3 = this.data.options).failure) == null) {
      _base3.failure = [];
    }
    if ((_ref4 = (_base4 = this.data.options).always) == null) {
      _base4.always = [];
    }
    if (this.data.configFile) {
      this.data.configFile = grunt.template.process(this.data.configFile);
    }
    server.start(this.data, function(exitCode, exit) {
      var success;
      success = exitCode === 0;
      grunt.task.run(success ? _this.data.options.success : _this.data.options.failure);
      grunt.task.run(_this.data.options.always);
      return done(success);
    });
    if (!this.data.options.keepalive) {
      return done();
    }
  });
};
