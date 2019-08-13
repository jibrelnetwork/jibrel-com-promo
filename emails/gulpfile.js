const path = require('path')
const gulp = require('gulp')
const browser = require('browser-sync')
const rimraf = require('rimraf')
const hb = require('gulp-hb')
const through = require('through2')
const imagemin = require('gulp-imagemin')
const inlineCSS = require('gulp-inline-css')
const rename = require('gulp-rename')
const glob = require('glob')
const multiDest = require('gulp-multi-dest')
const zip = require('gulp-zip')

const DIST_RE = new RegExp('^dist/([^/]+)/([^/]+)/')

exports.default = gulp.series(clean, build, images, compress)

exports.dev = gulp.series(exports.default, server, watch)

function clean(done) {
  rimraf('dist', done)
}

function build() {
  return gulp.src('../src/locales/*/messages.json')
    .pipe(through.obj((file, enc, cb) => {
      const lang = file.relative.split('/')[0]
      const data = {
        lang,
        dir: lang === 'ar' ? 'rtl' : 'ltr',
        align: lang === 'ar' ? 'right' : 'left',
        translation: JSON.parse(file.contents.toString())
      }

      gulp.src('src/templates/*.hbs')
        .pipe(hb({
          partials: 'src/{layouts,partials}/*.hbs',
          helpers: 'src/helpers/*.js',
          data,
        }))
        .pipe(inlineCSS({
          applyStyleTags: false,
          removeStyleTags: false,
          url: `file://${path.resolve(__dirname, 'src')}`,
        }))
        .pipe(rename((path) => {
          path.dirname = path.basename
          path.basename = 'index'
          path.extname = '.html'
        }))
        .pipe(gulp.dest(`dist/${lang}`))
        .on('error', cb)
        .on('end', cb)
    }))
}

function images() {
  const subdirs = glob
    .sync('dist/**/index.html')
    .map(filepath => {
      const [, lang, templateName] = filepath.match(DIST_RE)

      return `dist/${lang}/${templateName}/images`
    })

  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(multiDest(subdirs))
}

function compress(cb) {
  const subtasks = glob
    .sync('dist/**/index.html')
    .map(filepath => {
      const [, lang, templateName] = filepath.match(DIST_RE)

      const compressSingleEmailTemplate = function () {
        return gulp.src(`dist/${lang}/${templateName}/**/*`)
          .pipe(zip(`${templateName}.zip`))
          .pipe(gulp.dest(`dist/${lang}`))
      }

      compressSingleEmailTemplate.displayName = `compress ${lang}/${templateName}`

      return compressSingleEmailTemplate
    })

  return gulp.parallel.apply(
    gulp,
    subtasks,
  )(cb)
}


function server(done) {
  browser.init({
    server: './dist',
    startPath: 'en/founder'
  })
  done()
}

function watch() {
  gulp.watch('src/**/*.{hbs,js,css}').on('all', gulp.series(build, browser.reload))
  gulp.watch('src/images/*').on('all', gulp.series(images, browser.reload))
}
