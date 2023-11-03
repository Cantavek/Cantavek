
import { DocumentVideoIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  icon: DocumentVideoIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description (a little description of the video (is not requored))',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'lock',
      title: 'Lock',
      type: 'boolean',
      initialValue: true,
      validation: Rule => Rule.required()
    }),
    defineField({
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      title: 'Duration (format mm:ss -> ex: 3:34)',
      name: 'duration',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      title: 'Teaser (if you the user to have a teaser of the if not pay already)',
      name: 'teaser',
      type: 'file',
    }),
    defineField({
      title: 'Video',
      name: 'video',
      type: 'file',
      validation: Rule => Rule.required()
    }),
  ]
})