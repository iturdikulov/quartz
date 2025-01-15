import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Inom Turdikulov",
    pageTitleSuffix: "",
    enableSPA: false,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "iturdikulov.com",
    ignorePatterns: ["private", "templates", ".obsidian", "books", "img/*.md", ".sync"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Sans",
        body: "Noto Sans",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "#FFFFFF",
          lightgray: "#E5E5E5",
          gray: "#B8B8B8",
          darkgray: "#212124",
          dark: "#212124",
          primary: "#E8E8EF",
          secondary: "#151515",
          tertiary: "#BA97BA",
          highlight: "rgba(219, 219, 219, 0.6)",
          textHighlight: "#FFF23688",
        },
        darkMode: {
          light: "#282C34",
          lightgray: "#8C8E90",
          gray: "#ABB2BF",
          darkgray: "#D4D4D4",
          dark: "#EBEBEC",
          primary: "#4D5E6D",
          secondary: "#61AFEF",
          tertiary: "#56B6C2",
          highlight: "rgba(97, 175, 239, 0.15)",
          textHighlight: "#B3AA0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest", openLinksInNewTab: true }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        rssLimit: 20,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
