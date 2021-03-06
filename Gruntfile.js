module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			scripts: {
				files: ['css/*.css', 'index.html', 'js/*.js', 'js/**/*.js'],
				options: {
					livereload: 9090,
				}
			}
		},
		uglify: {
			my_target: {
				files: [{
					expand: true,
					cwd: 'js/',
					src: 'app-map.js',
					dest: 'dist/js'
				}]
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default');
}