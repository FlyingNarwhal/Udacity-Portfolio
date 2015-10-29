module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          quality: 70
        },

        files: [{
          expand: true,
          src: ['*.{jpg,gif,png}'],
          cwd: 'images/',
          dest: 'images/dist/'
        }]
      }
    },
  }),
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};