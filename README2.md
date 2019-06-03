# 项目的目录结构

- public      静态资源文件夹，它里面的内容是不需要 webpack 做打包构建的内容。
  - favicon.ico
  - index.html        用于 webpack 主动生成 index.html 的模板
- src         项目源文件夹，你写代码的位置。这个里面的所有内容，都会经过webpack的打包构建
  - assets    静态资源文件夹，这个里面主要放 css img font 之类的东西，
  - components  vue的组件
  - App.vue     老二组件
  - main.js     项目的入口js文件
- .browserslistrc   浏览器的兼容配置文件，它主要是给到 postcss 使用的。
- .editorconfig     告诉我们编辑器的配置
- .eslintrc.js      eslint 的规则配置文件
- .gitignore        git 忽略文件
- babel.config.js   babel 的配置，.babelrc
- package-lock.json npm 锁文件
- package.json      npm 依赖项，与当前项目的描述
- postcss.config.js postcss 的配置文件
- README.md         读我文件

# 项目启动

# 假数据 - 使用  json-server 来模拟假数据

> 前端开发，很多时候，我们前端的页面已经做好了，下一步就是要跟后台做接口的联调，但是这个时候后台可能还没有写完。这个时候就需要我们自己来造假数据，好使前端的业务逻辑能够跑起来。

todo.json

{
  data: [
    { name: '吃饭', id: 1 },
    { name: '睡觉', id: 2 }
  ]
}

{
  data: [
    { aname: '吃饭', aid: 1 },
    { aname: '睡觉', aid: 2 }
  ]
}

### 1. 自己写json文件

> 假数据应该放到 public 文件夹下

todos.json

### 2. mockjs

> 一款能够创建假数据，并且这个假数据还有些真实的工具。它主要是拦截我们的ajax请求来实现。

1. 安装
```sh
npm install --save mockjs
```
2. 去编写 mockjs 的拦截代码 src/mockdata/index.js
3. 在 main.js 中，引入第2步中的文件

### 3. json-server

> 也是一套假数据的工具，但是能帮助我们实现数据的操作。


1. 全局安装
```sh
npm install -g json-server
```
2. 写一个json
3. 启动json-server
```sh
json-server db.json
```


