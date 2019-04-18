[English](./README_en-US.md) | 简体中文

<p align="center">
    <img alt="dva-boot-admin" src="https://user-images.githubusercontent.com/1697158/49214902-8f888180-f402-11e8-8207-84d5cdf9d9bf.png" width="140">
</p>
<h1 align="center">DVA Boot Admin</h1>
<h3 align="center">:lemon: :tangerine: :cherries: :cake: :grapes: :watermelon: :strawberry: :corn: :peach: :melon:</h3>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg">
  <img src="https://img.shields.io/badge/developing%20with-DVA%20BOOT%20ADMIN-2077ff.svg">
</p>

基于React生态系统的最成熟的技术体系，搭建的一套开箱即用的后台管理系统，框架里包含了一些独有的定制组件，以及许多经过大量实践口碑良好的第三方组件，它不仅仅是一个简单的仪表盘展示界面，更是保证您下一个web项目所必需的所有工具，我们希望使用它的人可以快速、稳定的开发出健壮、美观、易用的web程序。

## 目录
* [功能](#feature)
* [工程结构](#structure)
* [开发](#usage)
* [文档](https://github.com/LANIF-UI/dva-boot-admin/blob/master/docs/index.md)
  - [如何开始](https://github.com/LANIF-UI/dva-boot-admin/blob/master/docs/start.md)
  - [全局配置](https://github.com/LANIF-UI/dva-boot-admin/blob/master/docs/config.md)
  - [modelEnhance用法](https://github.com/LANIF-UI/dva-boot-admin/blob/master/docs/modelEnhance.md)
  - [pageHelper用法](https://github.com/LANIF-UI/dva-boot-admin/blob/master/docs/pageHelper.md)
  - [组件](https://github.com/LANIF-UI/dva-boot-admin/blob/master/docs/components.md)
  - [接口数据模拟](https://github.com/LANIF-UI/dva-boot-admin/blob/master/docs/mock.md)
  - [打包](https://github.com/LANIF-UI/dva-boot-admin/blob/master/docs/build.md)
  - [FAQs](https://github.com/LANIF-UI/dva-boot-admin/blob/master/docs/faqs.md)
* [截图](#gallery)
* [更新日志](https://github.com/LANIF-UI/dva-boot-admin/blob/master/CHANGELOG.md)
* [结尾](#end)

## 功能
- **封装了dva框架的数据流转**，简单的请求可以不用在model和service中定义
- **封装了数据模拟**，可以独立于后台开发前台功能
- **封装了分页请求**，简化并规范了分页逻辑
- **封装了fetch请求**，适应与后台多种交互请求, body参数 parameter参数 path参数，动态请求头，请求前后拦截
- **路由按需加载**，首屏加载超快
- **扩展了antd写了许多实用的UI**，通过一个配置即可生成，后台CRUD三件套(数据表格，搜索框，新增编辑表单)
- **按业务模块划分的目录结构**，开发独力功能时无需分心其它模块，做到最小耦合
- 生产环境下打包，gzip后只有**2.09 MB**，只使用常用模块后不到**1 MB**
- 一些常用的小部件用法
- 许多精心设计的页面及交互场景
- [dva-boot](https://github.com/LANIF-UI/dva-boot)脚手架封装的功能
- 全局异常处理，全局请求拦截，**公共配置提取**
- **代码自动配置工具**[dva-boot-desktop](https://github.com/LANIF-UI/dva-boot-desktop)，即将到来:tada:

## 工程结构
```
.
├── public                   # 不参与编译的资源文件
├── templates                # 为代码生成所准备的模板文件
├── src                      # 主程序目录
│   ├── index.js             # 程序启动和渲染入口文件
│   ├── config.js            # 全局配置
│   ├── components           # 全局公共组件
│   ├── layouts              # 页面结构组件
│   │   ├── BasicLayout      # 基本布局
│   │   └── OtherLayout      # 布局组件根据具体功能调整，在路由配置中引用
│   ├── routes               # 动态路由目录（每个功能一个文件夹的MVC结构）
│   │   ├── index.js         # 路由配置文件
│   │   ├── Home             # 功能模块
│   │   │   ├── index.js     # 路由配置文件
│   │   │   ├── assets       # 单独属于这个模块的静态资源文件
│   │   │   ├── components   # 页面组件
│   │   │   ├── model        # dva model
│   │   │   ├── service      # dva service
│   │   │   └── routes **    # 子路由(目录结构与父级相同)
│   │   └── Login            # 功能模块
│   │       ├── index.js     # 路由配置文件
│   │       ├── assets       # 单独属于这个模块的静态资源文件
│   │       ├── components   # 页面组件
│   │       ├── model        # dva model
│   │       ├── service      # dva service
│   │       └── routes **    # 子路由(目录结构与父级相同)
│   ├── utils                # 工具类
│   └── assets               # 资源文件
│           ├── fonts        # 字体 & 字体图标
│           ├── images       # 图片
│           └── styles       # 全局样式
```

## 使用方法

``` javascript
$ git clone https://github.com/LANIF-UI/dva-boot-admin.git
$ cd dva-boot-admin
// 安装依赖
$ yarn
// 启动
$ yarn start
// 打包
$ yarn build
// 打包带图形化分析
$ yarn build --analyze
```

## 兼容性

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- | 
| >= IE10 | last 2 versions | last 2 versions | last 2 versions | last 2 versions

## 结尾
# learn-react-dva
