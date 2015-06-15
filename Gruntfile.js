module.exports = function (grunt)
{
grunt.initConfig({
  allhaml: {
    options: {
      inDir: 'haml',
      outDir: 'html',
      ouEx: 'html'
    },
    dist: {
      src: ['<%= allhaml.options.inDir %>/**/*.haml'],
      dest: '<%= allhaml.options.outDir %>'
    }
  },
});
grunt.loadNpmTasks('grunt-allhaml');
}