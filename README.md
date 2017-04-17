使用es6 react 实现一个简单的todoListDemo （含使用mocha做的单元测试）

下载
----

```js
git clone https://github.com/jdwdw/todoListDemo.git
cd es6learning
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
cnpm install webpack -g
cnpm install mocha -g
```

运行:
-----

```js
npm test
```

项目的基础结构：
-------------------

1.	[组件](./src/components)
2.	[入口](./src/entry.jsx)
3.	[html模版](./src/index.html)
4.	[测试文件](./test)



总结
----

```
1. 写测试时要注意react的虚拟Dom节点和真实节点的区别。

```
