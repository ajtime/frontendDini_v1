var src = 'src',
    dest = 'build',
    proxyaddress = 'http://tropicana.drpixel.net/',
    sfdest = '../../',
    babelify = require('babelify'),
    //react = require('react'),
    bowerPath = 'bower_components'

module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: [dest]
      },
      port: 2112,
      files: [
        dest + '/*.html',
        dest + 'assets/css/main.css',
        dest + 'assets/scripts/*.js',
        dest + '/assets/images/**'
      ]
    }
  },
  browserifyconfig: {
    insertGlobals : true,
    debug: false,
    //entries:    src + '/javascript/main.js',
    //entries:    './src/javascript/main.js',
    entries:    './src/javascript/main.jsx',
    dest:       './build/assets/js',
    outputName: 'main.js',
    transform: [
      [babelify, {
        presets: "react",
        //presets: [react],
        ignore: "**/bower_components/**"
      }]
    ],
    cache: {},
    packageCache: {},
    fullPaths: true
  },
  delete: {
    src: [dest]
  },
  filter: {
    styles: [
      '*.css', 
      '!*.map'
    ]
  },
  copyfonts: {
    development: {
      src:  src + '/fonts/*',
      dest: dest + '/assets/fonts'
    }
  },
  jade: {
    //src: src + '/jade/**/*.jade', //for all output rendered
    src: src + '/jade/*.jade',
    dest: dest + '/',
    jadeOpts: {
      'pretty': true
    }
  },
  sass: {
    src: src + '/sass/**/*.scss',
    dest: dest + '/assets/css',
    options: {
      noCache: true,
      compass: false,
      //bundleExec: true,
      //require: 'susy',
      sourcemap: true,
      sourcemapPath: '../../_assets/sass'
    }
  },
  images: {
    src:  src + '/images/**/*.{jpg,jpeg,png,gif}',
    dest: dest + '/images/',
    options: {
      optimizationLevel: 7,
      progessive: true,
      interlaced: true
    }
  },
  bower: {

  },
  watch: {
    jade: src + '/jade/**/*.jade',
    sass:    src + '/sass/**/*.{sass,scss}',
    scripts: src + '/javascript/**/*.js',
    images:  src + '/images/**/*'
  }
  //,
  // sass: {
  //   src:  srcAssets + '/sass/**/*.{sass,scss}',
  //   dest: developmentAssets + '/assets/css',
  //   options: {
  //     noCache: true,
  //     compass: false,
  //     //bundleExec: true,
  //     sourcemap: true,
  //     sourcemapPath: '../../_assets/sass'
  //   }
  // },
  // autoprefixer: {
  //   browsers: [
  //     'last 3 versions',
  //     'Firefox ESR'
  //   ],
  //   cascade: false,
  //   remove: true
  // },
  // images: {
  //   //src:  srcAssets + '/images/**/*',
  //   src:  'src/assets/images/**/*',
  //   //dest: developmentAssets + '/images'
  //   dest: 'build/assets/images'
  // },
  // watch: {
  //   jade: srcAssets + '/jade/**/*.jade',
  //   sass:    srcAssets + '/sass/**/*.{sass,scss}',
  //   scripts: srcAssets + '/app/**/*.js',
  //   images:  srcAssets + '/assets/images/**/*',
  //   sprites: srcAssets + '/assets/images/**/*.png'
  // }
};