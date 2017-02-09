module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			task: {
				src: ['src/less/all.less'], 
				dest: 'build/css/main.css'
			},
			options: {
				'paths': 'source',
				'rootpath': '',
				'compress': true,
				'cleancss': false,
				'ieCompat': true,
				'optimization': null,
				'strictImports': false,
				'strictMath': false,
				'strictUnits': false,
				'syncimport': false,
				'dumpLineNumbers': false,
				'relativeUrls': false,
				'customFunctions': null,
				'report': 'min',
				'sourceMap': false,
				'sourceMapFilename': '',
				'sourceMapURL': '',
				'sourceMapBasepath': '',
				'sourceMapRootpath': '',
				'outputSourceFiles': false,
				'modifyVars': null,
				'banner': ''
			}
		},
		uglify: {
            
			task: {
				src: ['**/*.js'], 
				dest: 'build/js/main.js'
			},
			options: {
				'mangle': {},
				'compress': {},
				'beautify': false,
				'expression': false,
				'report': 'min',
				'sourceMap': false,
				'sourceMapName': undefined,
				'sourceMapIn': undefined,
				'sourceMapIncludeSources': false,
				'enclose': undefined,
				'wrap': undefined,
				'exportAll': false,
				'preserveComments': undefined,
				'banner': '',
				'footer': ''
			}
		},
        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: ['uglify']
            },
            css: {
                files: ['src/less/*.less'],
                tasks: ['less']
            }
        }
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['less', 'uglify']);
};