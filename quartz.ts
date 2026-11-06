import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

// Pin one page to the top of its folder in the Explorer sidebar.
// Same default order as Quartz (folders first, then files A-Z), except the
// page whose slug matches PINNED always comes first. The function is turned
// into text and run in the browser, so it must not use anything from outside it.
// To pin a different page, change the slug (lowercase, spaces become hyphens).
const explorerOptions = {
  sortFn: (a: any, b: any) => {
    const PINNED = "documentary-craft/film-recommendations/complete-documentary-list.base"
    if (a.slug === PINNED) return -1
    if (b.slug === PINNED) return 1
    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }
    return !a.isFolder && b.isFolder ? 1 : -1
  },
}

// Quartz looks overrides up by plugin name. The Explorer is installed from npm,
// so its name is the package name; "explorer" is a harmless fallback.
for (const name of ["@quartz-community/explorer", "explorer"]) {
  componentRegistry.setOptionOverrides(name, explorerOptions)
}

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
