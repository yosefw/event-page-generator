module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
      img: [
        "public/img/"
      ]
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
      css: {
        files: [
          {
            expand: true,
            cwd: "src",
            src: "*.css",
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
    },

    watch: {
      html: {
        files: "src/*.html",
        tasks: [
          "copy:html"
        ]
      },
      css: {
        files: "src/*.css",
        tasks: [
          "copy:css"
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
    }
  });


  // Load grunt plugins.
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-browser-sync");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["browserSync", "watch"]);
};
