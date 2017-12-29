webpackConfig = require './webpack.config.js'

module.exports = (grunt) => 
  grunt.initConfig {
    webpack:
      options:
        stats: !process.env.NODE_ENV || process.env.NODE_ENV is 'development'
      prod: webpackConfig
      dev: Object.assign({ watch: true }, webpackConfig)
  }

  grunt.loadNpmTasks 'grunt-webpack'

  true