# 屯人服 Wiki

基于 VitePress 构建的屯人服 Minecraft 服务器知识库网站。

## 项目介绍

屯人服 Wiki 是一个为 Minecraft 屯人服服务器玩家提供的综合知识库，包含服务器指南、新手入门、玩法攻略、常见问题等内容。本项目使用 VitePress 构建，提供美观、响应式的用户界面和流畅的阅读体验。

### 特色功能

- 🏠 **服务器介绍**：详细的服务器信息和特色玩法说明
- 🧭 **新手指南**：从连接服务器到了解基本规则的入门知识
- 📚 **玩法攻略**：服务器特色玩法、经济系统、建筑技巧等进阶内容
- 📅 **更新日志**：使用自定义时间线展示服务器更新历史
- 🔍 **全站搜索**：快速查找所需信息
- 📱 **响应式设计**：完美适配各种设备屏幕

## 技术栈

- **VitePress**: ^1.6.3
- **Vue 3**: 作为 VitePress 的底层框架
- **vitepress-markdown-timeline**: ^1.2.2 (自定义时间线插件)
- **skinview3d**: ^3.3.0 (Minecraft 皮肤查看器)
- **three**: 0.156.1 (3D 渲染库)

## 安装与使用

### 前置要求

- Node.js 18.0 或更高版本
- pnpm (推荐) 或 npm

### 安装步骤

1. 克隆仓库

```bash
git clone https://github.com/yourusername/trf-wiki.git
cd trf-wiki
```

2. 安装依赖

```bash
pnpm install
```

### 开发命令

```bash
# 启动开发服务器
pnpm dev

# 构建静态网站
pnpm build

# 本地预览构建结果
pnpm preview
```

## 项目结构

```
.
├── docs/                  # 文档源文件
│   ├── .vitepress/       # VitePress 配置
│   │   ├── config.mts    # 站点配置
│   │   ├── sidebar.ts    # 侧边栏配置
│   │   └── theme/        # 主题自定义
│   ├── guide/            # 指南内容
│   │   ├── faq/          # 常见问题
│   │   ├── gameplay/     # 玩法攻略
│   │   ├── join/         # 加入服务器
│   │   ├── other/        # 其他内容
│   │   ├── updates/      # 更新日志
│   │   ├── index.md      # 指南首页
│   │   └── rules.md      # 服务器规则
│   ├── public/           # 静态资源
│   │   ├── logo.svg      # 站点 Logo
│   │   └── skin/         # 皮肤资源
│   └── index.md          # 网站首页
├── package.json          # 项目配置
└── README.md             # 项目说明
```

## 贡献指南

欢迎为屯人服 Wiki 做出贡献！如果你想要改进内容、修复错误或添加新功能，请遵循以下步骤：

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

## 许可证

本项目采用 [GNU通用公共许可证v3.0](LICENSE) (GNU GPL v3)。
