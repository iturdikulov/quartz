import { joinSegments, pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const iconPath = joinSegments(baseDir, "static/drawing_avatar.png")
  return (
    <span class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img src={iconPath} alt="iturdikulov.com logo"/>
        iturdikulov.com
      </a>
    </span>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1rem;
  margin: 0;
}
.page-title img{
  margin: 0 1rem 0 0;
  vertical-align: middle;
  width: 42px;
  height: 42px;
  box-shadow: 0px 0px 20px 0px rgba(90, 159, 216, 0.6);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
