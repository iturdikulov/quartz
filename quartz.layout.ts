import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { QuartzPluginData } from "./quartz/plugins/vfile"

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
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.Graph({
        localGraph: {
          showTags: false,
        },
        globalGraph: {
          showTags: false,
        },
      })
    ),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.RecentNotes({
        limit: 6,
        showTags: false,
        filter: (node) => !node.filePath?.includes(".txt"),
    }),
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
