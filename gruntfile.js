module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      // sass
      sass: {
        dist: {
          options: {
            style: 'compressed'
          },
          files: {
              '_site/css/style.css': '_src/sass/style.scss'
          }
        }
      }
});
  
    // Load the plugin that provides the "sass" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
  
    // Default task(s).
    grunt.registerTask('default', ['sass']);
  
  };