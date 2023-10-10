import { HeartFilledIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  icon: HeartFilledIcon,

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

    defineField({
      name: 'sponsoring',
      title: 'Sponsoring Type',
      type: 'reference',
      to: { type: 'sponsoring' },
      readOnly: true,
    }),
  ]
})