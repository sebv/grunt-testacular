
module.exports = function(grunt) {
  var runner;
  runner = require('testacular').runner;
  return grunt.registerMultiTask('testacularRun', 'Run tests on a testacular server. ', function() {
    var done, _base, _base1, _base2, _base3, _ref, _ref1, _ref2, _ref3,
      _this = this;
    done = this.async();
    if ((_ref = (_base = this.data.options).success) == null) {
      _base.success = [];
    }
    if ((_ref1 = (_base1 = this.data.options).failure) == null) {
      _base1.failure = [];
    }
    if ((_ref2 = (_base2 = this.data.options).always) == null) {
      _base2.always = [];
    }
    if ((_ref3 = (_base3 = this.data.options).nofail) == null) {
      _base3.nofail = false;
    }
    return runner.run(this.data, function(exitCode) {
      var success;
      success = (exitCode === 0) || _this.data.options.nofail;
      grunt.task.run(success ? _this.data.options.success : _this.data.options.failure);
      grunt.task.run(_this.data.options.always);
      return done(success);
    });
  });
};
