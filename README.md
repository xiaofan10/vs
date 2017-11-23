# vs-server [![][tnpm-image]][tnpm-url]

Server Setter for VisualEngine

---

## 使用

```js
import React from 'react';
import { Bundle } from '@ali/visualengine';
const ServerSetter from '@ali/vs-server';

module.exports = Bundle.createPrototype({
  title: '测试',
  componentName: 'Test',
  configure: [{
    title: '某属性',
    name: 'someprop',
    initialValue: null,
    setter: <ServerSetter />,
  }]
});
```

**数据格式要求**

`ServerSetter` 数据格式如下

```js
data = "string";
```

## 开发

### 目录结构

```
├── package.json
├── README.md           说明文档
├── build               编译输出目录
└── src                 源代码
    ├── index.js        模块文件
    └── style.less      样式文件
```

### 环境准备

**安装visualengine-devtools**

```sh
tnpm install -g @ali/visualengine-devtools
```

> 详细文档 <http://gitlab.alibaba-inc.com/vision/visualengine-devtools>

### 常用命令

**首次检出项目**

```sh
tnpm install
```

**拉取项目更新之后**

```sh
tnpm update
```

**启动调试服务器**

```sh
tnpm start
```

**构建输出**

```sh
tnpm run build
```

**发布**

```sh
tnpm publish
```

[tnpm-image]: http://web.npm.alibaba-inc.com/badge/v/@ali/vs-server.svg?style=flat-square
[tnpm-url]: http://web.npm.alibaba-inc.com/package/@ali/vs-server
