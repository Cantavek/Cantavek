import { defineField } from "sanity";

export default defineField({
  name: 'featureVariant',
  title: 'Feature Variant',
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
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{
        type: 'object',
        name: 'feature',
        fields: [
          {name: 'title', type: 'string', title: 'Title'},
          {name: 'description', type: 'string', title: 'Description (little description)'},
          {
            name: 'icon',
            title: 'Icon',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
              list: [
                {title: 'Speaker', value: 'speaker'},
                {title: 'Videos', value: 'videos'},
                {title: 'Sponsor', value: 'sponsor'},
                {title: 'Location', value: 'location'},
              ]
            }
          },
        ]      
      }],
     
      // validation: Rule => Rule.required()
    }),
  ]
})