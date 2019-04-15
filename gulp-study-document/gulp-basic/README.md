# Gulp Basic

## Working with Files

Gulp로 파일을 처리하려면 `src()` 메서드로 파일을 읽어오고, `pipe()` 메서드로 체이닝 하면서 처리하고, `dest()`
메서드로 최종 파일을 생성합니다.

예를 들어,

```javascript
const { src, dest } = require('gulp');

exports.default = function() {
  return src('src/*.js')
    .pipe(dest('output/'));
}
```

이러한 코드가 있다면,

1. `src/*.js`에 해당하는 파일들을 읽어서
2. `output/`에 파일을 작성합니다.

```javascript
const { src, dest } = require('gulp');
const babel = require('gulp-babel');

exports.default = function() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(dest('output/'));
}
```

이러한 코드가 있다면,

1. `src/*.js`에 해당하는 파일들을 읽어서
2. 읽어들인 파일의 내용을 babel로 transpiling 한 후
3. `output/`에 해당 내용을 파일로 작성합니다.

## Globs

glob은 파일경로를 매칭하는데 사용되는 리터럴 혹은 와일드카드 문자열로, `src()`에 단일 glob 문자열 혹은 glob 배열을
사용하여 읽어올 파일을 결정하게 됩니다.

> Node.js에서의 glob은 minmatch module을 사용하고 있으며, [globtester](http://www.globtester.com/)에서
> 매칭 테스트를 해 볼 수 있습니다.

다음과 같은 코드가 있다고 할 때

```javascript
gulp.src('source/**/*.html')
  .pipe( ...  )
```

`'source/**/*.html'`이 glob에 해당합니다.

### Segment & Seperator

세그먼트는 구분자 사이의 모든 문자이고, glob에서 구분자는 OS에 관계없이 `/`를 사용합니다. <br>
때문에 Windows 에서는 `path` 메서드가 반환하는 값을 사용하지 않아야 합니다.

### * (single-star)

단일 세그먼트 내의 모든 문자에 해당합니다. 단일 디렉토리 내의 파일을 찾는데 유용합니다.

`'*.html'`는 `index.html`, `index2.html`에는 해당하지만, `sub/index.html`, `sub/html/index.html` 등에는
해당하지 않습니다.

```javascript
'*.html'
```

### ** (double-star)

세그먼트 전체에 걸쳐 모든 문자에 해당하며 중첩된 디렉토리 내의 파일을 찾는데 유용합니다.

`'images/**'`는  `images/common/logo.png`, `images/main/bg.jpg`, `images/sub/bg.jpg` 등 `images/`내의 모든 파일에 해당하지만,
`css/`, `html/` 등에는 해당하지 않습니다.

```javascript
'images/**'
```

### ! (negative)

앞서 찾아진 파일들 중 제외할 파일들을 설정하는데 사용합니다. 때문에 단독으로 사용되거나, 배열의 처음에 올 수 없습니다.

`['images/**', '!images/sprites/**']`는 `images/sprites/`를 제외한 `image/` 내의 모든 파일에 해당합니다.


```javascript
['images/**', '!images/sprites/**']
```