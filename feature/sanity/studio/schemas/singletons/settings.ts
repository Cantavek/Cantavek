import {CogIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

const TITLE = 'Settings'


export default defineType({
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'faqs',
      title: "FAQ's",
      type: 'array',
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
