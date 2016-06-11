module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles',
        src: ['*.scss'],
        dest: 'styles',
        ext: '.css'
      }]
    }
  },
  uglify: {
      
      dist: {
        src: ['scripts/script.js'],
        dest: 'scripts/script.min.js'
      }
    },

  watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['**/*.scss'],
      tasks: ['sass'],
      
    },
  }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['sass'],['watch'],['uglify']);

};