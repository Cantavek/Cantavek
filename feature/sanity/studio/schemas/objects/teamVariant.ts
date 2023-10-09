import { defineField } from "sanity";

export default defineField({
  name: 'teamVariant',
  title: 'Team Variant',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'avatar',
      title: 'Profile picture',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'instagram_link',
      title: 'Instagram Link',
      type: 'string'
    }),
    defineField({
      name: 'twitter_link',
      title: 'Twitter Link',
      type: 'string'
    }),
    defineField({
      name: 'linkedin_link',
      title: 'LinkedIn Link',
      type: 'string'
    }),
  ]
})