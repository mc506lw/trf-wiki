// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// 导入时间线插件样式
import 'vitepress-markdown-timeline/dist/theme/index.css'
// 导入自定义时间线样式
import './timeline-custom.css'

// 导入自定义组件
import CommandExplorer from './components/CommandExplorer.vue'

// 自定义主题配置
export const themeConfig = {
  // 青绿色+黄色基调的颜色配置
  colors: {
    // 主色调：青绿色
    brand: {
      // 青绿色的三个亮度级别
      1: '#0a8c7f', // 深青绿色
      2: '#10b3a3', // 中青绿色
      3: '#16d9c7', // 浅青绿色
      soft: 'rgba(22, 217, 199, 0.16)' // 半透明青绿色
    },
    // 提示色：与主色调相同
    tip: {
      1: '#0a8c7f',
      2: '#10b3a3',
      3: '#16d9c7',
      soft: 'rgba(22, 217, 199, 0.16)'
    },
    // 警告色：黄色
    warning: {
      1: '#b99000',
      2: '#e0ac00',
      3: '#ffc700',
      soft: 'rgba(255, 199, 0, 0.16)'
    },
    // 危险色：保持红色
    danger: {
      1: '#b91c1c',
      2: '#e02424',
      3: '#f05252',
      soft: 'rgba(240, 82, 82, 0.16)'
    }
  },
  // 首页英雄区域渐变色
  hero: {
    name: {
      background: '-webkit-linear-gradient(120deg, #16d9c7 30%, #ffc700)'
    },
    text: {
      background: '-webkit-linear-gradient(120deg, #0a8c7f 30%, #b99000)'
    },
    tagline: {
      background: '-webkit-linear-gradient(120deg, #10b3a3 30%, #e0ac00)'
    },
    actions: {
      tip: {
        background: 'var(--vp-c-brand-3)'
      }
    }
  }
}

// 自定义主题
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('CommandExplorer', CommandExplorer)
  }
} satisfies Theme
