const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

const cssFiles = [
  'src/styles/style.css',
  'src/styles/responsive.css',
  'src/styles/main.css',
];

async function minifyCSS() {
  const tasks = cssFiles.map(async (file) => {
    await gulp.src(file)
      .pipe(cleanCSS())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('dist/styles'));
  });

  await Promise.all(tasks);
}

gulp.task('minify-css', minifyCSS);

gulp.task('default', gulp.series('minify-css'));
