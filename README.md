# 轻量级 Minecraft 状态监视网站

如图所示

![Snipaste_2024-03-14_16-43-41](https://github.com/unitwk/mc-server-status-center/assets/18360009/90c126da-6c9b-4a04-9fc6-565d1b9b8ea6)

## 启动方式

1. 安装 NodeJS 环境（https://nodejs.org/）

必须确保能够正确执行 npm 和 node 这两个命令

2. 安装依赖库

```bash
cd server
npm install --production
```

3. 启动程序

```bash
cd server
npm run start
```

4. 通过 IP 访问网站

默认监听 80 端口，如果你需要 HTTPS 可以套一层 Nginx 反向代理。

如果要修改端口请打开文件 server/index.ts 中的第 15 行，将数字 80 改成其他即可。

## 配置文件

server\servers.json 要监听的 MC 服务器列表

server\mcsms.json MCSM 面板列表
