import {HomeIcon} from '@sanity/icons'
import {defineField} from 'sanity'

const TITLE = 'Home'

export default defineField({
  name: 'home',
  title: TITLE,
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      name: 'team',
      title: 'Team',
    },
    {
      name: 'sponsors',
      title: 'Sponsors',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // Hero
    // defineField({
    //   name: 'hero',
    //   title: 'Hero',
    //   type: 'hero.home',
    //   group: 'editorial',
    // }),
    defineField({
      name: 'teams',
      title: 'Team list',
      type: 'array',
      of: [{ type: 'teamVariant'}],
      group: 'team',
    }),
    defineField({
      name: 'list',
      title: 'Sponsor list',
      type: 'array',
      of: [{ type: 'sponsorVariant'}],
      group: 'sponsors',
    }),
    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo.home',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        // media: icon,
        subtitle: 'Index',
        title: TITLE,
      }
    },
  },
})
