import {defineConfig, isDev} from 'sanity'

import {deskTool} from 'sanity/desk'
import {schemaTypes} from './feature/sanity/studio/schemas'
import {structure} from './feature/sanity/studio/desk'

import {visionTool} from '@sanity/vision'
import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array'
import {media, mediaAssetSource} from 'sanity-plugin-media'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'default',
  basePath: '/admin',
  title: 'cantavek',

  projectId: 'f5exgevg',
  dataset: 'developement',

  plugins: [
    deskTool({structure}),
    imageHotspotArrayPlugin(),
    media(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },

  form: {
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
      },
    },
    image: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource)
      },
    },
  },
})