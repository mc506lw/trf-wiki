import { defineConfig } from 'vitepress'
import { themeConfig } from './theme/index'
// 导入侧边栏配置
// 导入时间线插件
import timeline from 'vitepress-markdown-timeline'
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
const vitePressOptions = {
  // 站点语言设置
  lang: 'zh-CN',

  // 站点标题
  title: "屯人服 Wiki",

  // 站点描述
  description: "Minecraft 生存服务器知识库",

  // 站点头部配置
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
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
      { text: '指南', link: '/屯人服文档/从这里开始' }
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mc506lw/trf-wiki' },
      { icon:{ svg:'<svg t="1747447331928" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4645" width="200" height="200"><path d="M980.79827 694.105946c-21.144216-122.796973-109.844757-203.250162-109.844757-203.250162 12.647784-111.477622-33.792-131.26573-33.792-131.26573C827.392 14.668108 530.985514 20.67373 524.730811 20.839784 518.476108 20.67373 222.01427 14.668108 212.300108 359.590054c0 0-46.467459 19.788108-33.819676 131.26573 0 0-88.700541 80.453189-109.817081 203.250162 0 0-11.291676 207.484541 101.403676 25.40627 0 0 25.350919 69.161514 71.790703 131.26573 0 0-83.082378 28.256865-75.997405 101.625081 0 0-2.87827 81.836973 177.401081 76.218811 0 0 126.699243-9.852541 164.753297-63.515676l16.605405 0 0.276757 0 16.633081 0c38.026378 53.635459 164.725622 63.515676 164.725622 63.515676 180.224 5.618162 177.401081-76.218811 177.401081-76.218811 7.029622-73.368216-75.997405-101.625081-75.997405-101.625081 46.439784-62.104216 71.790703-131.26573 71.790703-131.26573C992.034595 901.590486 980.79827 694.105946 980.79827 694.105946z" p-id="4646"></path></svg>'}, link: 'https://qm.qq.com/q/Dv7VAQQXUA'}
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
      message: '<a href="https://icp.gov.moe/?keyword=20255066" target="_blank">萌ICP备20255066号</a> <a href="https://mcicp.com" title="MCICP备2025000014号" target="_blank">MCICP备2025000014号</a>',
      copyright: '屯人服 我的世界公益生存服'
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
    hostname: 'https://wiki.506521.xyz'
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
}


const vitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  documentRootPath: '/docs',
  collapsed: false,
  capitalizeFirst: true,
  sortMenusByFrontmatterOrder: true,
  frontmatterOrderDefaultValue: 1000,
  useFolderLinkFromIndexFile: true
};

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));