# RvBlog

简介：菜汪个人博客-前端板块

开发时间：2022年5月27日-2022年6月22日



## 前言

本个人博客为作者的原创内容，用于存放和分享一些个人学习成果和生活日常，如果对于本博客您有什么意见和想法，欢迎与我交流。

> **相关链接**
>
> 前端
>
> - [rv-blog-front-end: 菜汪个人博客项目-前端部分 (gitee.com)](https://gitee.com/Rv_Jiang/rv-blog-front-end)
> - [CwRv07/rv-blog-front-end: 菜狗博客前端 (github.com)](https://github.com/CwRv07/rv-blog-front-end)
>
> 后端
>
> - [rv-blog-back-end: 菜汪个人博客-后端部分 (gitee.com)](https://gitee.com/Rv_Jiang/rv-blog-back-end)
> - [CwRv07/rv-blog-back-end: 菜狗博客后端 (github.com)](https://github.com/CwRv07/rv-blog-back-end)
>
> **注：本库仅为前端板块，可通过链接查看后端板块**



## 技术栈

- **vue3+vite+ts**

vue3框架支持组合式API，便于组合逻辑，更符合当前潮流

vite前端工具链，相比vue-cli，大大优化了Vue项目的启动速度

ts的支持使项目逻辑更为严谨，使后期的维护和扩展更方便

- **pinia**

vue的存储库，俗称vuex5，允许项目跨组件/页面共享状态

- **vue-router**

vue官方路由，便于构建单页面应用

- **element-plus**

支持vue3的UI库，便于前端页面快速组件化开发

- **Sass**

css扩展语言，提高样式书写效率，大大提高了css的代码复用性和可维护性，降低成本

- **axios**

网络请求库，项目中对axios进行二次封装，且对项目后端接口进行高度封装，使前后端衔接变得轻松快捷

- **eslint+prettier+husky**

用于格式化代码，确认代码规范，本项目是作者尽可能模仿企业级开发，适应实习工作实践的个人项目，因此在规范和插件包上略下功夫

- **其余相关插件**

vite-plugin-vue-setup-extend,vite-plugin-compression,vite-plugin-imagemin,unplugin-vue-components,vite-plugin-style-import,unplugin-auto-import,vite-plugin-optimize-persist,vite-plugin-package-config



## 项目介绍

### 实现功能

1. 博客文章的阅览与上传
2. 博客文章的评论
3. 博客后台系统（支持对博客网站的管理和维护）

### 功能特点

1. 游客和管理员权限关系系统：路由导航守卫，动态路由，请求响应权限验证
2. Markdown编辑器和阅读器：二次封装md-editor-v3
3. 评论支持Emoji表情图：字符编码的修改和调整
4. 文章分享功能（目前支持微博、QQ、微信）
5. 博客打赏功能（支付宝API，目前为测试阶段）
