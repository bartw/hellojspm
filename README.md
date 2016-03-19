# hellojspm

## hello world

### initialize app

```shell
npm install jspm --save-dev
jspm init -y
jspm install
```

### create index.html

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible” content=”IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello jspm</title>
   </head>
   <body>
       <h1>Hello jspm</h1>
     <script src="jspm_packages/system.js"></script>
     <script src="config.js"></script>
     <script>
       System.import('main.js')
     </script>
   </body>
</html>
```

### create main.js

```js
console.log('is this thing on?');
```

### test it

python -m SimpleHTTPServer

## adding angular

### install angular using jspm

```shell
jspm install angular
```

### bootstrap angular in main.js

```js
import angular from 'angular';  
import 'modules/application/application-module';

angular.element(document).ready(function() {  
  angular.bootstrap(document, ['Application']);
});
```

### add src/app.module.js

```js
angular.module('app', []);
```

### check if angular is working in index.html

```html
<h1>Hello jspm</h1>
<p>{{1+1}}</p>
```

### test it

python -m SimpleHTTPServer