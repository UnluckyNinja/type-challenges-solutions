import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My TCs Solution",
  description: "My solutions for type challenges",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '题解', link: '/' },
      { text: 'Type Challenges', link: 'https://github.com/type-challenges/type-challenges' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '简介', link: '/' },
          { text: '前言', link: '/getting-started/preface' }
        ]
      },
      {
        text: '简单',
        items: [
          { text: '4 - 实现 Pick', link: '/easy/4-Pick/' },
          { text: '7 - 实现 ReadOnly', link: '/easy/7-Readonly/' },
          { text: '11 - 元组转换为对象', link: '/easy/11-TupleToObject/' },
          { text: '14 - 第一个元素', link: '/easy/14-First/' },
          { text: '18 - 获取元组长度', link: '/easy/18-TupleLength/' },
          { text: '43 - Exclude', link: '/easy/43-Exclude/' },
          { text: '189 - Awaited', link: '/easy/189-Awaited/' },
          { text: '268 - If', link: '/easy/268-If/' },
          { text: '533 - Concat', link: '/easy/533-Concat/' },
          { text: '898 - Includes', link: '/easy/898-Includes/' },
          { text: '3057 - Push', link: '/easy/3057-Push/' },
          { text: '3060 - Unshift', link: '/easy/3060-Unshift/' },
          { text: '3312 - Parameters', link: '/easy/3312-Parameters/' },
        ]
      },
      {
        text: '中等',
        items: [
          { text: '2 - 获取函数返回类型', link: '/medium/2-ReturnType/' },
          { text: '3 - 实现 Omit', link: '/medium/3-Omit/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  rewrites: {
    'getting-started/introduction.md': 'index.md',
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        docFooter: {
          prev: '上一篇',
          next: '下一篇',
        },
        outline: {
          label: '本页内容'
        },
        darkModeSwitchLabel: '暗色模式',
        sidebarMenuLabel: '目录',
        returnToTopLabel: '回到顶部',
        langMenuLabel: '选择语言',
      }
    }
  }
})
