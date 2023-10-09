import { defineField } from "sanity";

export default defineField({
  name: 'sponsorVariant',
  title: 'Sponsor Variant',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: Rule => Rule.required()
    }),
  ]
})