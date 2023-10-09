import {DocumentIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // Title
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      description: 'Add a image you want a image at the top of the page',
      options: {
        hotspot: true
      },
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      description: 'A little intro',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    // Body
    defineField({
      name: 'body',
      title: 'Body',
      description: 'All text you want to add in this page',
      type: 'body',
      validation: Rule => Rule.required()
    }),
    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo.page',
      group: 'seo',
      validation: Rule => Rule.required()
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
})
