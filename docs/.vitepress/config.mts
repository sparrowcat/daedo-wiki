import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Daedo Wiki",
  description: "A digital grimoire providing all the instructions you need to invoke the ancient rituals required to use Daedo software and hardware.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: 'Operating TkStrike', link: '/operating-tkstrike' },
          { text: 'Setup/Transition/Teardown', link: '/setup-teardown' },
	  { text: 'Troubleshooting' },
	  { text: 'Daedo Hardware Configuration' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sparrowcat/daedo-wiki' }
    ]
  }
})
