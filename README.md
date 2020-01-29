<h2 align="center">
 nguardpym
</h2>
<p>
   原因：在前端脚手架中监听配置文件.热更新无需重启服务,直接监听npm 执行的命令
   PS:场景是越来越多的前端工程加入了前端脚手架例如vue/cli-service，
   实际启动命令为vue-cli-service serve，
   不能像之前使用nodemon监听某个启动js实现热加载了。
</p>
<p>
node watch some files change to use npm 
</p>
<p>
全部开源
</p>

### Links/相关链接


### Features

1. 支持场景

   - [x] npm 

#### 技术栈（当前）

1. 前端：[js]

## Project setup

```
npm install nguardpym -g

ngp run xxx
```

##  Example

```
新建一个.ngplimit 文件 
文件中填写需要监听的 某个文件 或者 文件目录
例如 vue.config.js
```
## Thanks
```
chokidar
```
