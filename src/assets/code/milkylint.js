const tslint = require('tslint');
const ts = require('typescript');
const { milkyLint, milkyReport } = require('@favware/milky-tslint');

gulp.task('lint', () => {
  const lintProgram = tslint.Linter.createProgram('./tsconfig.json', '.');
  ts.getPreEmitDiagnostics(lintProgram);

  return gulp
    .src(tsSource)
    .pipe(
      milkyLint({
        formatter: 'stylish',
        program: lintProgram,
        tslint: tslint,
        fix: !!argv.fix
      })
    )
    .pipe(milkyReport());
});
