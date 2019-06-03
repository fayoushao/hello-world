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