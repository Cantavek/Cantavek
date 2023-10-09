import {CogIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

const TITLE = 'Settings'


export default defineType({
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'faq',
      title: "FAQ's",
    },
  ],
  fields: [
    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'faqs',
      title: "FAQ's",
      type: 'array',
      group: 'faq',
      of: [
        defineField({
          name: 'faq',
          title: 'Faq',
          type: 'object',
          fields: [
            {
              name: 'question',
              title: "Question",
              type: 'string',
            },
            {
              name: 'answer',
              title: "Answer",
              type: 'string',
            }
          ]
        }),
       
      ]
    }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
})
