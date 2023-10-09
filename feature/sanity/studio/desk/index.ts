/**
 * Desk structure overrides
 */
import {ListItemBuilder, StructureResolver} from 'sanity/desk'
// import collections from './collectionStructure'
// import colorThemes from './colorThemeStructure'
import home from './homeStructure'
import pages from './pageStructure'
// import products from './productStructure'
import settings from './settingStructure'

const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return ![
    'collection',
    'colorTheme',
    'home',
    'media.tag',
    'page',
    'product',
    'productVariant',
    'settings',
  ].includes(id)
}

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      home(S, context),
      pages(S, context),
      settings(S, context),
      // S.divider(),
      // collections(S, context),
      // products(S, context),
      // S.divider(),
      // colorThemes(S, context),
      // S.divider(),
      // settings(S, context),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
