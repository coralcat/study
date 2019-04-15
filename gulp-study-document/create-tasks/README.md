# Create Tasks

Gulp의 task는 비동기 함수로 구성됩니다.

```javascript
const foo = () {
  // foo task
}

function bar() {
  // bar task
}
```

그리고 명확하게는 다음 중 하나의 형태를 가지는 함수이어야 합니다.

- stream을 반환

  ```javascript
  const foo = () => {
    return gulp
      .src(...)
      .pipe(...)
  }
  ```

- callback을 호출

  ```javascript
  const foo = (done) {
    ...
    done();
  }
  ```

- Promise를 반환

  ```javascript
  const foo = () => {
    return new Promise((resolve, reject) => {
      ...
      resolve();
    });
  }
  ```

- child process를 반환

  ```javascript
  const spawn = require('child-process').spwan;

  const foo = () => {
    return spwan(...);
  }
  ```

- observable을 반환

  ```javascript
  const observable = require('rx').Observable;

  const foo = () => {
    return Observable.return(...);
  }
  ```

## Exporting

Gulp task는 **public**과 **private**로 다루어집니다.

- **public** task는 gulpfile로부터 export 되는 task로 `gulp` 명령어에 의해 사용될 수 있습니다.
- **private** task는 gulpfile 내부적으로 사용되는 task로 보통 `series()`, `parallel()` 구성에 사용됩니다.

```javascript
const {src, dest, series} = require('gulp');

// private task: clean
const clean = () => {
  ...
};

// private task: build
const build = () => {
  ...
}

// public task: default
exports.default = series(clean, build);
```

만일 private task 를 실행해보면, 다음과 같이 정의되지 않은 task라는 메세지가 출력이 되고,

```bash
$ gulp clean
[15:11:26] Using gulpfile D:\gulp-playground\gulpfile.js
[15:11:26] Task never defined: clean
[15:11:26] To list available tasks, try running: gulp --tasks
```

public task를 실행하면, 다음과 같이 task가 실행되는 것을 확인할 수 있습니다.

```bash
$ gulp
[15:12:29] Using gulpfile D:\gulp-playground\gulpfile.js
[15:12:29] Starting 'default'...
[15:12:29] Starting 'clean'...
[15:12:29] Finished 'clean' after 16 ms
[15:12:29] Starting 'build'...
[15:12:29] Finished 'build' after 4.73 ms
[15:12:29] Finished 'default' after 24 ms
```

`gulp --tasks` 명령을 주면, 현재 export 되어 있는 public tasks를 확인 할 수 있습니다.

```bash
$ gulp --tasks
[15:12:45] Tasks for D:\gulp-playground\gulpfile.js
[15:12:45] └─┬ default
[15:12:45]   └─┬ <series>
[15:12:45]     ├── clean
[15:12:45]     └── build
```

## Compose tasks

gulp는 각 개별 task를 조합시키기 위한 메서드로 `series()`와 `parallel()`을 제공합니다.

- `series()`: 순차적으로 task를 수행
- `parallel()`: 병렬로 task를 수행

```javascript
const {clean, parallel} = require('gulp');

const clean = () => {
  ...
}

const scss = () => {
  ...
}

const transpile = () => {
  ...
}

// 1. run clean
// 2. clean task가 종료된 후, scss와 transpile을 병렬로 수행
exports.default = series(clean, parallel(scss, transpile));
```