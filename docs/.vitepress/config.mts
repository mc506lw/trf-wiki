import { defineConfig } from 'vitepress'
import { themeConfig } from './theme/index'
// 导入侧边栏配置
import { sidebar } from './sidebar'

// 导入时间线插件
import timeline from 'vitepress-markdown-timeline'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点语言设置
  lang: 'zh-CN',

  // 站点标题
  title: "屯人服 Wiki",

  // 站点描述
  description: "Minecraft 生存服务器知识库",

  // 站点头部配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#16d9c7' }], // 更新为青绿色
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  // 主题相关配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // 站点标志
    logo: '/logo.svg',

    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],

    // 使用导入的侧边栏配置
    sidebar,

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 搜索配置
    search: {
      provider: 'local', // 使用本地搜索
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    // 页脚配置
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2023-present TRF Wiki 团队'
    },

    // 文档更新时间显示
    lastUpdated: {
      text: '上次更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/mc506lw/trf-wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 导航栏文本本地化
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    langMenuLabel: '切换语言',

    // 大纲配置
    outline: {
      label: '页面导航',
      level: 'deep' // 可选值: 'deep' | [2, 3]
    },

    // 文档页脚导航
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 碳广告配置
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // }
  },

  // 站点地图配置
  sitemap: {
    hostname: 'https://example.com'
  },

  // Markdown 配置
  markdown: {
    // 代码块行号
    lineNumbers: true,
    // 标题锚点配置
    anchor: {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '#'
    },
    // 脚注配置
    toc: { level: [1, 2, 3] },
    // 代码块配置
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    // 自定义容器
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    // 注册时间线插件
    config: (md) => {
      md.use(timeline)
    }
  },
})
