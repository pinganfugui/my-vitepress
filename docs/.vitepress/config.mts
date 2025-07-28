import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: '/my-vitepress/',
  lang: 'zh-CN',
  title: "Markdown文档",
  // description: "Markdown文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '文档列表',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Test', link: '/test' }
        ]
      }
    ],

    /*     socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ] */
  }
})
