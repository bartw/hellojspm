# hellojspm

npm install jspm --save-dev
jspm init -y
jspm install

create index.html
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

create main.js
```js
console.log('is this thing on?');
```

python -m SimpleHTTPServer