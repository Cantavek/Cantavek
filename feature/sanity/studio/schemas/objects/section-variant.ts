import { defineField } from "sanity";

export default defineField({
  name: 'sectionVariant',
  title: 'Section Variant',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'call_to_action',
      title: 'Call to Action',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Follow', value: 'follow'},
          {title: 'See content/video', value: 'videos'},
          {title: 'Sponsor us', value: 'sponsoring'},
        ]
      },
      validation: Rule => Rule.required()
    }),
  ]
})