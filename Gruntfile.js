module.exports = function(grunt) {

  grunt.initConfig({

    sass: {
      options: {
          loadPath: ["node_modules/bootstrap-sass/assets/stylesheets"]
        },
      dist: {
        files: {
          "public/main.css": "src/sass/main.scss"
        }
      }
    },

    watch: {
      html: {
        files: "src/*.html",
        tasks: [
          "copy:html"
        ]
      },
      sass: {
        files: "src/sass/**/*.scss",
        tasks: [
          "sass"
        ]
      },
      js: {
        files: "src/*.js",
        tasks: [
          "copy:js"
        ]
      },
      img: {
        files: "src/img/**",
        tasks: [
          "clean:img",
          "copy:img"
        ]
      }
    },

    copy: {
      cwd : "src",
      html: {
        files: [
          {
            expand: true,
            cwd: "src",
            src: "*.html",
            dest: "public"
          }
        ]
      },
      js: {
        files: [
          {
            expand: true,
            cwd: "src",
            src: "*.js",
            dest: "public"
          }
        ]
      },
      img: {
        files: [
          {
            expand: true,
            cwd: "src",
            src: "img/**",
            dest: "public/"
          }
        ]
      }
    },

    clean: {
      img: [
        "public/img/"
      ]
    },

    browserSync: {
      bsFiles: {
        src : "public/*"
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "./public"
        }
      }
    }

  });


  // Load grunt plugins.
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-browser-sync");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-sass");

  grunt.registerTask("default", ["sass", "browserSync", "watch"]);
};
