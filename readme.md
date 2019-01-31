# Beauty of JavaScript

Many demos with eslint babel javascript es6.

all demo with all kind of files formatting configurations, the testing file with name `testingfile`, such as `testingfile.js`, you can try it your self.

## Regular Javascript Demo

This is a basic eslint demo, only for es5, eslint recommended rules. easy settings, easy use.

## First need install:

```
npm i -D eslint eslint-plugin-prettier prettier
```

## Second vscode settings:

```javascript
{
  "files.eol": "\n",
  "eslint.autoFixOnSave": true,
  // "eslint.validate": [
  //   "javascript"
  // ],
  "javascript.format.enable": false,
  "editor.formatOnSave": false,
}
```

## Test a javascript file

```javascript
var a =  111;


console.log(a);
function aa (params) {
  params += "sss"
  return a   + params;
}
aa();;;;
```

Then save the file (`cmd/ctrl + s`), bingo

```javascript
var a = 111;

console.log(a);
function aa(params) {
  params += "sss";
  return a + params;
}
aa();
```

## Notice

I disabled vscode default javascript format, so `alt + shift + F` cannot work anymore!

without prettier plugin, you need do save only to format file, if you have install prettier plugin, that `alt + shift + F` shortcut key would work normally.

## Other config demo

* [es6 with airbnb](https://github.com/whidy/beauty-my-webs/tree/es6-airbnb)
* [javascript standard]()draft
* [eslint with vue]()draft
* [eslint with nuxt]()draft
