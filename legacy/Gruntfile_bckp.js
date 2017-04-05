module.exports = function(grunt) {

  // Configuration
  grunt.initConfig({
    concat: {
      js: {
        src: ['components/*/*.js'],
        dest: 'prod/main.js'
      }
    },
    sass: {
      compile: {
        options: {
          update: true
        },
        files: [{
          src: 'components/main.scss',
          dest: 'prod/main.css'
        }]
      }
    },
    uglify: {
      build: {
        files: [{
          src: ['components/*/*.js'],
          dest: 'prod/main.min.js'
        }]
      }
    },
    watch: {
      css: {
        files: ['components/*/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['components/*/*.js'],
        tasks: ['concat'],
        options: {
          livereload: true
        }
      }
    }//, // copy task is not needed anymore, at least for css and js
    // copy: {
    //   css: {
    //     files: [{
    //       src: 'dist/main.css',
    //       dest: 'prod/main.css'
    //     }]
    //   },
    //   js: {
    //     files: [{
    //       src: 'dist/main.js',
    //       dest: 'prod/main.js',
    //     }]
    //   }
    // }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Register tasks
  grunt.registerTask('build', ['uglify', 'sass']); // 'grunt build' to run this
  grunt.registerTask('default', ['concat', 'sass', 'watch']); // 'grunt' to run this

}
