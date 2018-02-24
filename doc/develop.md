# FEZ-Api 开发文档

## 技术选型

- 主要开发语言： Node(v >= 6.20)
- 关系型数据库：MySql
- 服务端框架： 自建

*Tip: 最好全局安装 nodemon ，对于开发调试比较方便*

## 开发环境搭建

```shell
# 1、克隆项目

# 2、创建数据库

# 3、根据 /config/env.js.dist 复制配置 /config/env.js

# 4、安装依赖

# 5、开始开发
nodemon app.js
```

## 命令集 bin/console

### 命令列表

在项目根目录下面执行 `bin/console` 会输出所有的命令。命令集会根据类别分为不同的命令包，不同命令包之间有分割线分割。如：

```shell
# 输入
$ bin/console

# 输出
=== bin/console ===
-------------------------  # migration 命令包
  migration:create
  migration:migrate
  migration:up
  migration:down
-------------------------  # system 命令包
  system:init
-------------------------
```

### 命令调用

在 `bin/console` 之后紧跟命令即可，如若需要参数，在命令之后添加。如：

```shell
# 初始化数据库脚本
$ bin/console migration:migrate

# 创建一条新的数据库脚本
$ bin/console migration:create  # 会在项目根目录的 migrations 文件夹内新增一条数据库脚本的模板文件，添加你想要的 sql 代码皆可完成。

# 执行某条具体的数据库脚本
$ bin/console migration:up 20171127121010  # 本例描述了具体的含参数命令的使用方法
```

### 创建命令包

根据项目需求，您可以创建个性化的工具包。方法非常简单。只需要在 src/Commands 下按照规范添加一个命令文件即可。如：创建一个 hello 的命令包。

```js
// 创建一个 HelloCommand.js 的文件，编写内容如下：
class HelloCommand {
    world() {
        console.log(`Hello World!`);
    }
}

module.expors = HelloCommand
```

好了，命令集的编写已经完成了。您可以通过 `bin/console` 查看您的命令是否已经存在于命令集中。然后通过调用 `bin/console hello:world` 来验证您的命令是否正确执行了。

*Tip: 有时需要在命令类内添加一些方法，但是不希望显示在命令集中的，可以给这些方法的命令以‘__’ 开头，即可达到在工具集内隐藏它的目的*

