import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.RenderExcalidraw()],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "GitHub </>": "https://github.com/iturdikulov",
      "YouTube": "https://www.youtube.com/@iturdikulov",
      "LinkedIn": "https://www.linkedin.com/in/iturdikulov/",
      "RSS": "/index.xml",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
  ],
  right: [
    Component.Search(),
    Component.Darkmode(),
    Component.Graph({
      localGraph: {
        showTags: false,
      },
      globalGraph: {
        showTags: false,
      },
    }),
    Component.Backlinks(),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ContentMeta()],
  left: [Component.PageTitle()],
  right: [
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      folderDefaultState: "open"
    })),
  ],
}
