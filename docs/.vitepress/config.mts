import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Notebook/',
  title: '笔记',
  description: 'A VitePress site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: {
      '/esp-idf/': [
        {
          text: 'Guide',
            collapsed: true,
          items: [
            { text: '安装ESP-IDF', link: '/esp-idf/install' },
            { text: '在VS Code中安装开发环境', link: '/esp-idf/vscode' },
            { text: 'Menuconfig', link: '/esp-idf/menuconfig' },
            { text: '使用C++开发', link: '/esp-idf/cpp' },
            { text: '添加组件', link: '/esp-idf/components' },
            { text: 'LCD', link: '/esp-idf/lcd' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wkai343' }
    ]
  }
})
