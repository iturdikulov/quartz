import { joinSegments, pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const iconPath = joinSegments(baseDir, "static/icon.png")
  return (
    <h1 class={classNames(displayClass, "page-title")}>
      <img src={iconPath} alt="My avatar logo"/>
      <a href={baseDir}>{title}</a>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.25rem;
  margin: 0 0 1rem;
}
.page-title img{
  margin: 0 1rem 0 0;
  vertical-align: middle;
  widht: 42px;
  height: 42px;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
