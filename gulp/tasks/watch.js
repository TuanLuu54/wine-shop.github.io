var airkit = require('airkit/gulp/compilejs');
var gulp = require('gulp');
var merge = require('merge-stream');
var config = require('../config');

gulp.task('watch', function() {
  gulp.watch(config.SASS_SOURCE, ['sass']);
  var streams = config.JS.map(function(jsConfig) {
    return airkit.watchjs(
      jsConfig.SOURCES, config.JS_OUT_DIR, jsConfig.OUT_FILE);
  });
  return merge.apply(null, streams);
});