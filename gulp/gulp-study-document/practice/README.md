# Workflow

gulp task를 설정은 보통 다음의 단계들을 따릅니다.

1. [gulp.js plugin registry](https://gulpjs.com/plugins/)에서 필요한 gulp 플러그인을 검색하거나, npm에서
필요한 모듈을 검색
2. 해당 플러그인(모듈)의 매뉴얼을 읽어본다.
3. 매뉴얼에 따라 플러그인을 설치하고
4. 매뉴얼에 따라 task를 작성한다.


## Build Webserver with LiveReload

`browserSync` plugin 설치

```bash
$ npm install --save-dev browser-sync
```

`gulpfile.js`에 `browserSync`를 불러옵니다.

```javascript
const browserSync = require('browser-sync').create();
```

`server` task를 작성합니다. (`server`는 임의의 이름으로 원하는 대로 작성하면 됩니다.)

```javascript
const server = () => {
  browserSync.init({
    server: {
      baseDir: 'source',
    },
  });
}
```

`server` task를 default task로 export 합니다.

```javascript
exports.default = server;
```


## Add HTML Validate Task

HTML을 작성한 후 W3C Markup Validator를 돌리는 작업이나 컨벤션에 맞게 작성되었는지 확인 하는 작업들을
HTML을 작성할 때마다 자동으로 검사 되도록 task 구성을 해봅니다.

> 개인적으로는 `gulp-html` 플러그인을 추천드립니다. <br>
> `gulp-html`은 'The Nu Html Checker'를 기반으로 하고 있고 이 checker가 W3C validator의
> 것과 동일하기 때문입니다. 단, 이를 사용하자면 JRE(Java Runtime Environment)를 추가로
> 설치해야 하기 때문에 연습에서는 `gulp-w3c-html-validation`으로 대체합니다.

`gulp-w3c-html-validation` 설치

```bash
$ npm install --save-dev gulp-w3c-html-validation
```

`gulpfile.js`에 `gulp-w3c-html-validation`를 불러옵니다.

```javascript
const htmlvalidator = require('gulp-w3c-html-validation');
```

`html` task를 작성해봅니다.

```javascript
const html = () => {
  return gulp
    .src('source/**/*.html')
    .pipe(htmlvalidator({generateReport: false}))
}
```

> `gulp-w3c-html-validation`은 현재 무조건적으로 결과 파일을 생성하게 되어 있으므로,
> 해당 파일들이 거슬리는 경우에는 결과 폴더를 `.gitignore`에 포함시키거나 다음 코드와 같이
> 해당 결과를 삭제하여 디렉토리를 깔끔하게 계속 유지하는 방법을 선택할 수 있습니다.
>
> ```javascript
> const html = () => {
>   return gulp
>     .src('source/**/*.html')
>     .pipe(htmlvalidator({generateReport: false}))
>     .on('end', () => {
>        return del('w3cErrors');
>     })
> }
> ```

이 task는 저장 시마다 동작되어야 하기 때문에, gulp가 파일의 변경을 감지할 때마다 수행할 수 있도록 감시가 필요합니다.

`*.html` 파일들이 변경 될 때 `html` task를 동작 시키도록 `watchTask` task를 구성합니다.

> 파일 변경을 감시하기 위해, `watch()` 메서드를 사용하며, 자세한 사용법은
> [Gulp 공식문서 API watch()](https://gulpjs.com/docs/en/api/watch) 섹션을 참고하세요.

```javascript
const watchTask = () => {
  gulp
    .watch('source/**/*.html', html);
}
```

`*.html` 파일들이 변경 될 때 브라우저가 자동으로 갱신되도록 `browser-sync`의 `reload` 기능을 붙여줍니다.

```javascript
const watchTask = () => {
  gulp
    .watch('source/**/*.html', html)
    .on('change', browserSync.reload);
}
```

위 task를 `gulp` 명령으로 수행시키도록 default task를 구성합니다.

default task는

1. HTML 문법, 컨벤션 검사
2. local webserver 구동 + HTML 파일 변경 감시

순으로 동작시키도록 구성합니다.

```javascript
exports.default = gulp.series(html, gulp.parallel(server, watchTask));
```

## Add CSS Autoprefix Task

이번에는 CSS 작성시 `-webkit-`, `-moz`, `-ms-` 등의 vendor prefix를 자동으로 붙여주는 task를 만들어 봅니다.

> 이를 자동화에 맡기는 이유는 어떤 속성이 vendor prefix가 필요한지를 명확하게 알고 있기가 어렵고, 무조건 붙여
> 넣으면 코드에 낭비가 발생하기 때문에 지원할 브라우저의 범위만 지정하면 플러그인이 자동으로 처리해주는 것이
> 더 나은 결과를 만들어 낼 수 있습니다.

`gulp-postcss`와 `autoprefixer`를 설치합니다.

> autoprefixer만을 사용한다면 `gulp-autoprefixer`를 사용해도 무관하나, cssnano등과 같은 postcss 플러그인을
> 사용하려면 `gulp-postcss`와 함께 사용하는 것이 더 좋습니다.

```bash
$ npm install --save-dev gulp-postcss autoprefixer
```

`gulpfile.js`에 `gulp-postcss`와 `autoprefixer`를 불러옵니다.

```javascript
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
```

`css` task를 작성해봅니다.

> 원본으로부터 autoprefixer에 의해 수정된 결과를 다시 파일로 작성해야 하므로, 처리된 파일을 작성할 디렉토리가
> 필요합니다. 여기서는 임의로 `dist`로 사용합니다.

```javascript
const css = () => {
  return gulp
    .src('source/css/**/*.css')
    .pipe(postcss([ autoprefixer ]))
    .pipe(gulp.dest('dist/css'))
}

```

지원 브라우저 범위 설정을 위해 `.browserslistrc` 파일을 작성합니다.

> `.browserslistrc`의 내용 작성 방법은 [browserslist github](https://github.com/browserslist/browserslist)를
> 참고합니다. [browserl.ist](https://browserl.ist/)를 이용하면 작성한 설정에 대한 지원 브라우저 범위를 쉽게
> 확인 할 수 있습니다.

```yaml
last 2 version
ie >= 9
```

HTML과 마찬가지로 `*.css` 파일들이 변경 될 때 `css` task를 동작 시키고 브라우저를 갱신시키도록 `watchTask`
task를 구성합니다.

```javascript
const watchTask = () => {
  gulp
    .watch('source/**/*.html', html)
    .on('change', browserSync.reload);
  gulp
    .watch('source/css/**/*.css', css)
    .on('change', browserSync.reload);
}
```

처리된 `css`가 `dist` 디렉토리에 작성되므로, 처리된 `html`역시 `dist` 디렉토리에 작성되도록 수정하고,
웹서버의 root 역시 `dist`로 변경합니다.

```javascript
const server = () => {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
  });
}

...

const html = () => {
  return gulp
    .src('source/**/*.html')
    .pipe(htmlvalidator({generateReport: false}))
    .pipe(gulp.dest('dist'))
}
```

default task에 `css` task를 추가합니다.

> `html`, `css` task는 순차로 실행할 필요가 없으므로 parallel로 구성합니다.

```javascript
exports.default = gulp.series(gulp.parallel(html, css), gulp.parallel(server, watchTask));
```


> `gulp-html`를 사용하는 경우에는 해당 모듈이 19.03.29일 현재 정상적으로 dest가 piping
> 되지 않으므로, validation과 copy(`dest()`)를 별도 task로 분리하여 작업하셔야 합니다.
> ```javascript
> const htmlValidate = () => {
>   return gulp
>     .src('source/**/*.html')
>     .pipe(htmlvalidator({generateReport: false}))
> }
>
> const html = () => {
>   return gulp
>     .src('source/**/*.html')
>     .pipe(gulp.dest('dist'))
> }
> ```
> 이에 따라 watch, default task들도 적절하게 변경되어야 합니다.

## Add Minifying CSS Task

이번에는 CSS를 압축하는 task를 추가해봅니다.

CSS 압축에 관련된 여러 가지 모듈들이 있지만, 여기서는 `cssnano`를 사용해봅니다.

우선 `cssnano`를 설치합니다.

```bash
$ npm install --save-dev cssnano
```

`gulpfile.js`에 `cssnano`를 불러들이고, css task에 `cssnano` 작업을 추가합니다. <br>
`postcss`로 후처리기를 구성해두었기 때문에, `postcss`의 플러그인으로 추가하기만 하면 됩니다.

```javascript
const css = () => {
  return gulp
    .src('source/css/**/*.css')
    .pipe(postcss([ autoprefixer, cssnano ]))
    .pipe(gulp.dest('dist/css'))
}
```

## Add Uglifying JavaScript Task

이번에는 JavaScript 코드를 난독화하는 task를 추가해보도록 하겠습니다.

JS 코드의 난독화는 보통 `UglifyJS`를 사용하며 gulp에서 uglifyJS를 사용하기 위해 `gulp-uglify`를 설치합니다.

```bash
$ npm install --save-dev gulp-uglify
```

`gulpfile.js`에 `gulp-uglify`를 불러들이고, js task를 작성합니다.

```javascript
const uglifyJS = require('gulp-uglify');

...

const js = () => {
  return gulp
    .src('source/js/**/*.js')
    .pipe(uglifyJS())
    .pipe(gulp.dest('dist/js'))
}
```

default task에 `js` task를 추가하고, `*.js` 파일들이 변경될 때 마다 `js` task를 동작 시키고 브라우저를 갱신
시키도록 `watchTask` task를 구성합니다.

```javascript
const watchTask = () => {
  gulp
    .watch('source/**/*.html', html)
    .on('change', browserSync.reload);
  gulp
    .watch('source/css/**/*.css', css)
    .on('change', browserSync.reload);
  gulp
    .watch('source/js/**/*.js', js)
    .on('change', browserSync.reload);
}

exports.default = gulp
  .series(
    gulp.parallel(html, css, js),
    gulp.parallel(server, watchTask),
  );
```

## Add Sourcemap Task

JavaScript가 난독화 된 이후에도 난독화 이전의 상태로 다시 매핑하여 디버깅을 수월하게 할 수 있도록 Sourcemap을
추가하는 task를 만들어 봅니다.

sourcemap을 만들기 위해서는 `gulp-sourcemaps`를 설치합니다.

```bash
$ npm install --save-dev gulp-sourcemaps
```

`gulpfile.js`에 `gulp-sourcemaps`를 불러들이고, js task에 sourcemap을 작성하기 위한 코드를 추가합니다.

```javascript
const sourcemaps = require('gulp-sourcemaps');

...

const js = () => {
  return gulp
    .src('source/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglifyJS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'))
}
```

## Prevent pipe breaking on Error

위 단계까지 진행을 한 후 실제 작업을 진행하다보면, 파일 저장 시 마다 task가 동작되기 때문에 `uglifyJS`와 같은
task의 경우 오류가 검출되게 되면 gulp가 중단되어 오류 수정 후 다시 실행시켜야하는 불편함이 발생됩니다.

이를 방지하기 위해 error hanlder를 추가하여 오류가 발생되는 스트림을 종료시켜 다음 프로세스가 계속해서 수행되도록
처리할 수도 있지만, 좀 더 쉽게 처리할 수 있도록 `gulp-plubmer`를 사용해 봅니다.

```bash
$ npm install --save-dev gulp-plumer
```

`gulpfile.js`에 `gulp-plubmer`를 불러들이고, task에 추가합니다.

```javascript
const plumber = require('gulp-plumber');

...

const js = () => {
  return gulp
    .src('source/js/**/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(uglifyJS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'))
}
```

## Add SCSS Precompile Task

이번에는 CSS 전처리기의 하나인 SCSS를 task에 추가해보도록 하겠습니다.

gulp에서 SCSS를 처리하도록 하기 위해 `gulp-sass`를 설치합니다.

```bash
$ npm install --save-dev gulp-sass
```

`gulpfile.js`에 `gulp-sass`를 불러들이고, `scss` task를 작성합니다.

```javascript
const sass = require('gulp-sass');

...

const scss = () => {
  return gulp
    .src('source/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(postcss([ autoprefixer ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
}
```

`scss` task를 default task에 추가하고, 파일 변경 시마다 컴파일 시키고 브라우저를 갱신시키도록 `watch` task에
추가합니다.

```javascript
const watchTask = () => {
  gulp
    .watch('source/**/*.html', html)
    .on('change', browserSync.reload);
  gulp
    .watch('source/css/**/*.css', css)
    .on('change', browserSync.reload);
  gulp
    .watch('source/sass/**/*.scss', scss)
    .on('change', browserSync.reload);
  gulp
    .watch('source/js/**/*.js', js)
    .on('change', browserSync.reload);
}

exports.default = gulp
  .series(
    gulp.parallel(html, css, scss, js),
    gulp.parallel(server, watchTask),
  );
```

## Add Automate Image Sprite

spriteimage 생성을 자동화시키는 작업을 만들어보도록 합니다.

spriteimage를 자동화 시키는데에는 주로 `spritesmith`라는 모듈이 사용되고, gulp에서 사용하도록
`gulp.spritesmith`가 플러그인으로 제공되고 있습니다.

```bash
$ npm install --save-dev gulp.spritesmith merge-stream
```

`gulpfile.js`에 `gulp.spritesmith`, `merge-stream`을 불러들이고 `sprite` task를 추가합니다.

```javascript
const sprite = require('gulp.spritesmith');
const merge = require('merge-stream');

...

const sprite = () => {
  const spriteData = gulp
    .src('source/images/sprite/*.{png,jpg,gif}')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css',
      padding: 8,
    }))

  const imgStream = spriteData.img
    .pipe(gulp.dest('dist/images'))

  const cssStream = spriteData.css
    .pipe(gulp.dest('dist/css'))

  return merge(imgStream, cssStream);
}
```

생성된 CSS를 보면 spritesmith에 의해 생성된 사용법 주석이 존재하고 minified 되지 않은 코드가 생성되기 때문에
minify 되도록 처리 코드를 추가합니다.

```javascript
const sprite = () => {
  const spriteData = gulp
    .src('source/images/sprite/*.{png,jpg,gif}')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css',
      imgPath: '/images/sprite.png',
      padding: 8,
    }))

  const imgStream = spriteData.img
    .pipe(gulp.dest('dist/images'))

  const cssStream = spriteData.css
    .pipe(sourcemaps.init())
    .pipe(postcss([cssnano]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))

  return merge(imgStream, cssStream);
}
```

`spritesmith`는 css외 Scss로도 만들어 낼 수 있고, 단지 `spritesmith()` 옵션의 `cssName` 이름을 `.scss`로
사용하기만 하면 됩니다.

```javascript
const sprite = () => {
  const spriteData = gulp
    .src('source/images/sprite/*.{png,jpg,gif}')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      padding: 8,
    }))

  const imgStream = spriteData.img
    .pipe(gulp.dest('dist/images'))

  const cssStream = spriteData.css
    .pipe(gulp.dest('source/sass'))

  return merge(imgStream, cssStream);
}
```

이렇게 하면 `source/scss` 디렉토리에 `_sprite.scss`가 생성되게 되고 (파일이 이미 존재하면 덮어쓰기) 이 파일을
열어보면 각 이미지의 sprite 정보와 Scss에서 사용할 수 있는 `mixin`들이 자동으로 생성된 것을 확인할 수 있습니다.


## Add Optimzing Image Task

gulp에서 이미지 최적화를 하는데는 주로 `gulp-imagemin` 플러그인이 사용됩니다.

```bash
$ npm install --save-dev gulp-imagemin
```

`gulpfile.js`에 `gulp-imagemin`을 불러들이고 image task를 추가합니다.

```javascript
const imagemin = require('gulp-imagemin');

...

const image = () => {
  return gulp
    .src(['source/images/**', '!source/images/sprite/**'])
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
}
```

`image` task를 default task에 추가하고, 파일 변경 시마다 최적화 시킬 수 있도록 watch task에 추가합니다.

```javascript
const watchTask = () => {
  gulp.watch('source/**/*.html', html);
  gulp.watch('source/css/**/*.css', css);
  gulp.watch('source/sass/**/*.scss', scss);
  gulp.watch('source/js/**/*.js', js);
  gulp.watch(['source/images/**', '!source/images/sprite/**'], image);
}

exports.default = gulp
  .series(
    gulp.parallel(html, css, scss, sprite, image, js),
    gulp.parallel(server, watchTask),
  );
```

## Incremental Builds

지금까지 작성된 task를 기준으로 작업을 진행해보면 `watch` task에 의해 변경이 감지되어 특정 task가 재실행 될 때
변경되지 않은 다른 파일들까지도 모두 다시 처리하게 되어 파일이 많아지면 많아질 수록 점점 더 느려지게 되는 상황을
만나게 됩니다.

이를 해결하기 위해 gulp 4.0에 있는 `since` 옵션과 `lastrun()` 메서드를 이용하여 이미 처리된 파일들을 제외하고
변경된 파일들만 처리하도록 기존 task들을 수정해봅니다.

`since`는 `src`로 globbing을 할 때 옵션으로 사용되며, `lastrun()`의 인자로 task를 넘겨줍니다. (어떤 task가
실행 된 시점 이후를 globbing)

```javascript
...

const html = () => {
  return gulp
    .src('source/**/*.html', {since: gulp.lastRun(html)})

...

const css = () => {
  return gulp
    .src('source/css/**/*.css', {since: gulp.lastRun(css)})

...

const scss = () => {
  return gulp
    .src('source/sass/**/*.scss', {since: gulp.lastRun(scss)})

...

const js = () => {
  return gulp
    .src('source/js/**/*.js', {since: gulp.lastRun(js)})

...

const spriteData = gulp
  .src('source/images/sprite/*.{png,jpg,gif}', {since: gulp.lastRun(sprite)})

...

const image = () => {
  return gulp
    .src(['source/images/**', '!source/images/sprite/**'], {since: gulp.lastRun(image)})

```

## Add Clean Building Task

마지막으로, 위 task로 작업을 진행할 경우 파일이 삭제되었을 때 `dist`에서는 파일이 삭제되지 않는 것을 발견할 수
있습니다. 또한, 개발 시에만 필요한 파일들이 포함되도록 task가 구성되어 있는 경우, 이러한 파일들은 최종 프로덕트에는
포함되지 않도록 되어야 합니다.

이를 위해서 별도의 `build` task를 구성해봅니다.

우선, `dist` 디렉토리를 삭제하도록 `del` 모듈을 설치하고 `clean`를 구성합니다.

```bash
$ npm install --save-dev del
```

```javascript
const del = require('del');

...

const clean = () => {
  return del('dist');
}
```

프로덕트를 build하는 task로 `build` task를 구성합니다. <br>
`build` task는 웹서버나 파일 변경 감지가 필요하지 않으므로 product build에 관련한 task만으로 구성합니다.

```javascript
exports.build = gulp
  .series(
    clean,
    gulp.parallel(html, css, scss, sprite, image, js),
  );
```