# Beauty of JavaScript

Many demos with eslint babel javascript es6.

all demo with all kind of files formatting configurations, the testing file with name `testingfile`, such as `testingfile.js`, you can try it your self.

## ES6 With Airbnb

Here is es6 eslint demo use [airbnb](https://github.com/airbnb/javascript).

but airbnb mostly for react project, so Here is a airbnb base rule, html files might cause a eslint error like `Parsing error: Unexpected token <`, so I add a config for `package.json` at the bottom `"eslintIgnore": ["*.html"]`, reference: [Using eslintIgnore in package.json](https://eslint.org/docs/user-guide/configuring#using-eslintignore-in-packagejson)

## develop environment configure

1. Install Two VSCode Plugins: 'eslint' and 'prettier'
1. Install packages that would introduce later

here is a reason why I install prettier plugin at last. without prettier, even though we enabled `"eslint.autoFixOnSave": true,`, but format a javascript fully complete on save has many times. For example:

```javascript
let [bb, cc] = [111,222];;;;
var c = (pa,pb) => {
    return pa + pb;
};
```

First time save file would be

```javascript
const [bb, cc] = [111,  222];
let c = (pa,  pb) => pa + pb;
```

Second time save file would be

```javascript
const [bb, cc] = [111, 222];
const c = (pa, pb) => pa + pb;
```

It really annoyed! So install prettier plugin and settings like this would resolve the problem.

```javascript
{
  "eslint.autoFixOnSave": false, // as you like
  "javascript.format.enable": false,
  "editor.formatOnSave": false,
  "prettier.eslintIntegration": true
}
```

After a good config, let's test again. Save the file, nothing happened, now we need a shortcut key `alt + shift + F`, bingo, javascript format successful one time.

## Notice

vscode default html formatter would conflict with prettier. For Example, default html file with emmet (new html file, input `!` and press `tab`) would generate a template as:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

but with key `alt + shift + f` would format as below:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

and vscode default settings with prefix `"html.format.*` would not work any more!

## Other Problems

* eslint.autoFixOnSave requires multiple saves

https://github.com/Microsoft/vscode-eslint/issues/575

https://github.com/Microsoft/vscode-eslint/issues/154

https://stackoverflow.com/questions/52102705/cant-get-correct-autoformat-on-save-in-visual-studio-code-with-eslint-and-prett/52234660

If you are interested with "Should a html file's head/body indent?", prettier had done a vote on twitter <https://twitter.com/prettiercode/status/1011743248145178625>, and github has similar vote <https://github.com/prettier/prettier/pull/4753#issuecomment-400486030>