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
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'section',
      title: 'Section',
    },
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
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        },
      }],
      group: 'hero',
    }),
    defineField({
      name: 'section_1',
      title: 'Section 1',
      type: 'sectionVariant',
      group: 'section',
    }),

    defineField({
      name: 'section_2',
      title: 'Section 2',
      type: 'sectionVariant',
      group: 'section',
    }),
    defineField({
      name: 'teams',
      title: 'Team list',
      type: 'array',
      of: [{ type: 'teamVariant'}],
      group: 'team',
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
