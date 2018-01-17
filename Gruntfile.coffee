module.exports = (grunt) => 
  grunt.initConfig {
    webpack:
      options:
        stats: !process.env.NODE_ENV || process.env.NODE_ENV is 'development'
      prod: require('./webpack.prod.js')
      dev: Object.assign({ 
        watch: true,
        watchOptions: {
          ignored: 'dist/**',
        },
      }, require('./webpack.config.js'))
    
    nodemon:
      base:
        script: 'bin/base'
        options:
          cwd: __dirname
          ignore: [ 'node_modules/**', 'dist/**', 'src/**', 'webpack.*.js' ]
          ext: 'js,yml'
          watch: [
            'routes/**/*.js'
            'models/**/*.js'
            'config/*.yml'
            '*.js'
          ]
      ws:
        script: 'bin/ws'
        options:
          cwd: __dirname
          ignore: [ 'node_modules/**', 'dist/**', 'src/**', 'webpack.*.js' ]
          ext: 'js,yml'
          watch: [
            'routes/**/*.js'
            'models/**/*.js'
            'config/*.yml'
            '*.js'
          ]
    
    # watch:
    #   server:
    #     files: [
    #       'views/**/*.pug'
    #     ]
    #     options:
    #       livereload: true

    concurrent:
      debug:
        # tasks: [ 'nodemon:base', 'nodemon:ws', 'watch', 'webpack:prod' ]
        tasks: [ 'nodemon:base', 'nodemon:ws', 'webpack:dev' ]
        options:
          logConcurrentOutput: true
    
    env:
      dev:
        NODE_ENV: 'development'
      test:
        NODE_ENV: 'test'
      prod:
        NODE_ENV: 'production'
      staging:
        NODE_ENV: 'staging'
  }

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-concurrent'
  grunt.loadNpmTasks 'grunt-nodemon'
  grunt.loadNpmTasks 'grunt-webpack'
  grunt.loadNpmTasks 'grunt-env'

  grunt.registerTask 'default', () ->
    grunt.log.writeln """
    Usage:
    \tgrunt serve
    """['yellow'].bold

  grunt.registerTask 'serve', [
    'env:dev'
    'concurrent:debug'
  ]

  true