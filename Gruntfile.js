//
// Gruntfile.js
// -------------------------------------------------------
//
// Actualmente la única tarea que estamos corriendo es la de compilar
// el stylus que tenemos en /static/styl/*
//

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //Stylus
        stylus: {
            compile: {
                options: {
                    paths: ['static/styl'],
                    use: [
                        require('fluidity') // use stylus plugin at compile time
                    ],
                },
                files: {
                    'static/css/result.css': 'static/styl/source.styl'
                }
            }
        }
    });

    // Cargamos grunt-contrib-stylus
    grunt.loadNpmTasks('grunt-contrib-stylus');

    // Default task(s).
    grunt.registerTask('default', ['stylus']);
};
