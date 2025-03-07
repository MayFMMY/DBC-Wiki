import { navbar, sidebar } from "./configs";

module.exports = {
  lang: "zh-CN",
  title: "DBC-Wiki",
  description: "这是 DBC-Wiki 站点",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "DBC-Wiki",
      description: "欢迎来到 DBC-Wiki",
    },
    "/en/": {
      lang: "en-US",
      title: "DBC-Wiki",
      description: "Welcome to DBC-Wiki",
    },
  },
  head: [["link", { rel: "icon", href: "/images/dbc.icon.png" }]],
  logo: "/images/dbc.icon.png",
  themeConfig: {
    repo: "DeepBrainChain/DBC-Wiki",
    docsDir: "docs",
    docsBranch: "main",
    locales: {
      "/": {
        navbar: navbar.zh,
        sidebar: sidebar.zh,
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",

        // page meta
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",
      },
      "/en/": {
        navbar: navbar.en,
        sidebar: sidebar.en,
        selectLanguageName: "English",

        // page meta
        editLinkText: "Edit this page on GitHub",
      },
    },
  },
  base: "/DBC-Wiki/",
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        isSearchable: (page) => page.path !== "/",
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
        },
      },
    ],
  ],
};
