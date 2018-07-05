# 文档系统

因为文档树形的结构更符合我的想法, 所以放弃了博客时间线的记录方式

dosify 是一个非常简单漂亮的系统 [官网](https://docsify.js.org/#/)

安装
```shell
npm i docsify-cli -g
```

初始化项目
```shell
docsify init ./docs
```

本地预览网站
运行一个本地服务器通过 docsify serve 可以方便的预览效果，而且提供 LiveReload 功能，可以让实时的预览。默认访问 http://localhost:3000 。
```shell
docsify serve docs
```