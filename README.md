# Aoba

[Aoba's resume](https://luyilin.github.io/Aoba/)

[English resume](https://luyilin.github.io/Aoba/resume-en.html)

## Introduction

Aoba is a resume creator which you can create a lovely resume only with a configuration file, such as a .json file or a .yaml file.

The project is build by [Poi](https://github.com/egoist/poi), then we need not git clone && run build to get a resume, just use it. The design is inspired by the cute [resume](https://github.com/DIYgod/Resume) by DIYgod. Thanks for the awesome work they done.

The name is inspired by lovely Aoba Suzukaze in 《new game!》, maybe it can be a gift for young people who enter the workforce, with my best wishes.

![Aoba Suzukaze](https://wx3.sinaimg.cn/mw690/a2117cdbly1fm7csm5gopj208z07ijvh.jpg)

## Quick Start

* Create an HTML file: `index.html` which will be be your resume:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
  <title>My resume</title>
  <!-- Stylesheet -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aoba-resume/dist/aoba.css">
</head>
<body>
  <div id="app"></div>
  <!-- Script -->
  <script src="https://cdn.jsdelivr.net/npm/aoba-resume/dist/aoba.js"></script>
  <!-- Start app -->
  <script>
    const resume = new aoba()
    resume.start('#app')
  </script>
</body>
</html>
```

* Then write a .json or .yaml file at the same directory where `index.html` is located.
The file has six parts, basicInfo, contact, application, workExperience, personalProject and skills.
See [content.json](https://github.com/luyilin/Aoba/blob/master/docs/content.json) or [content.yaml](https://github.com/luyilin/Aoba/blob/master/docs/content.yaml) for details.


* Then serve this directory as a static website:

  - node.js: `npm i -g serve` && `serve ./docs`
  - python: `cd ./docs` && `python -m SimpleHTTPServer`
  - golang: `cd ./docs` && `caddy`
  - ...etc, you can use any static file server as you like.
  
* Finally save the file as pdf, open the file in a browser, choose print and save.


## Deploy

### GitHub Pages

Simply put all your files in `docs` folder on `master` branch, or root directory on the `gh-pages` branch.

Don't forget to add `.nojekyll` file to tell GitHub to treat it as a normal static website.

## API

### Constructor

```js
const resume = new aoba(options)
```

#### options

##### lang

Type: `string`<br>
Default: `zh`

support zh & en

##### path 

Type: `string`<br>
Default: `./`

##### indexFile

Type: `string`<br>
Default: `content.json`

The configuration file.

E.g. [content.json](https://github.com/luyilin/Aoba/blob/master/docs/content.json), [content.yaml](https://github.com/luyilin/Aoba/blob/master/docs/content.yaml)

#### resume.start(target)

##### target

Type: `string` `HTMLElement`

The place to mount app.

## License

MIT &copy; [luyilin](http://github.com/luyilin)
