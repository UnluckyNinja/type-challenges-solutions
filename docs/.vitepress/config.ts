import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My TCs Solution",
  description: "My solutions for type challenges",
  base: '/type-challenges-solutions/',
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
          { text: '4 - 实现 Pick', link: '/easy/4-pick/' },
          { text: '7 - 实现 Readonly', link: '/easy/7-readonly/' },
          { text: '11 - 元组转换为对象', link: '/easy/11-tuple-to-object/' },
          { text: '14 - 第一个元素', link: '/easy/14-first/' },
          { text: '18 - 获取元组长度', link: '/easy/18-tuple-length/' },
          { text: '43 - Exclude', link: '/easy/43-exclude/' },
          { text: '189 - Awaited', link: '/easy/189-awaited/' },
          { text: '268 - If', link: '/easy/268-if/' },
          { text: '533 - Concat', link: '/easy/533-concat/' },
          { text: '898 - Includes', link: '/easy/898-includes/' },
          { text: '3057 - Push', link: '/easy/3057-push/' },
          { text: '3060 - Unshift', link: '/easy/3060-unshift/' },
          { text: '3312 - Parameters', link: '/easy/3312-parameters/' },
        ]
      },
      {
        text: '中等',
        items: [
          { text: '2 - 获取函数返回类型', link: '/medium/2-return-type/' },
          { text: '3 - 实现 Omit', link: '/medium/3-omit/' },
          { text: '8 - Readonly 2', link: '/medium/8-readonly-2/' },
          { text: '9 - 深度 Readonly', link: '/medium/9-deep-readonly/' },
          { text: '10 - 元组转合集', link: '/medium/10-tuple-to-union/' },
          { text: '12 - 可串联构造器', link: '/medium/12-chainable-options/' },
          { text: '15 - 最后一个元素', link: '/medium/15-last/' },
          { text: '16 - 出堆', link: '/medium/16-pop/' },
          { text: '20 - Promise.all', link: '/medium/20-promise-all/' },
        ]
      },
      {
        text: '困难',
        items: [
        ]
      },
      {
        text: '地狱',
        items: [
          { text: '5 - 获取只读字段', link: '/extreme/5-readonly-keys/' },
          { text: '151 - Query String Parser', link: '/extreme/151-query-string-parser/' },
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
