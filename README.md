# web-basic

## [README.ms 작성](https://pandao.github.io/editor.md/en.html#Features)

## VSC Setting
html crome으로 열기 : ctrl + shift + p > Configure Task > Create tasks.json file from template > other

```ts
"tasks": [
{

"label": "Chrome",

"type": "process",

"command": "chrome.exe",

"windows": {

"command": "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"

},

"args": [

"${file}"

],

"problemMatcher": [],

"group": {

"kind": "build",

"isDefault": true

}

}

]
```