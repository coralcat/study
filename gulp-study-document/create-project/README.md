# Create Gulp Project

## Create package.json File

필요한 의존성 모듈을 관리하기 위해서 먼저 package.json 파일을 생성합니다.

```bash
$ npm init --yes
```

이렇게 명령을 주면,

```json
{
  "name": "gulp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

이런 JSON이 작성된 `package.json` 파일이 생성됩니다.

각 항목을 직접 설정하려면 `--yes`을 제외하고 `npm init` 명령을 주면 각 항목별로 입력하여 설정하도록 진행됩니다.

```
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (gulp-test)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to D:\gulp\package.json:

{
  "name": "gulp-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)


```

## Install gulp

`package.json` 파일을 생성하고 나면, 다음 명령을 통해 gulp를 devDependency로 설치합니다.

```bash
$ npm install --save-dev gulp
```

### Verifying that gulp was properly installed

gulp가 설치되었는지 확인하려면 아래와 같은 명령어를 수행합니다. 아래와 같이 나오지 않는다면 gulp가 정상적으로
설치되지 않은 것이므로 다시 설치를 시도하셔야 합니다.

```bash
$ gulp --version
[19:06:39] CLI version 2.0.1
[19:06:39] Local version 4.0.0

```

## Create gulpfile.js

gulp로 수행할 작업들을 정의하기 위해서 디렉토리의 root 위치에 `gulpfile.js` 파일을 작성해야 합니다.

`gulpfile.js`에는 아래 코드를 작성하도록 합니다.

```javascript
const gulp = require('gulp');

```

## for ES6 Lover

### Install babel

gulp는 CommonJS와 ES6 방식을 모두 지원합니다. 실습에서는 gulp plugin들의 설명이 CommonJS를 기준으로 작성 되어
있는 경우가 많기 때문에 ES6 방식 보다는 CommonJS를 기준으로 설명됩니다.

ES6가 익숙한 분들은 ES6의 import/export로 사용하셔도 무방하나, gulp에서 ES6 문법에 대한 호환성 문제를 방지하기
위해 babel을 추가로 설정하셔야 합니다.

```bash
$ npm install --save-dev @babel/register @babel/core @babel/preset-env
```

### Create .babelrc

`.babelrc`파일을 디렉토리의 root 위치에 다음과 같이 작성합니다.

```json
{
 "presets": [ "@babel/preset-env" ]
}
```

### Create gulpfile.babel.js instead of gulpfile.js

ES6의 경우는 `gulpfile.js` 대신 `gulpfile.babel.js`을 작성하며, 따라서 파일 내용은

```javascript
import gulp from "gulp";

```

가 되어야 합니다.