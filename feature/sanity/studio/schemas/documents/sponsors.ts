import { HeartFilledIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  icon: HeartFilledIcon,

  fields: [
    defineField({
      name: 'created',
      title: 'Created',
      type: 'boolean',
      validation: Rule => Rule.required(),
      initialValue: false
    }),
    defineField({
      name: 'payed',
      title: 'Payed',
      type: 'boolean',
      validation: Rule => Rule.required(),
      initialValue: false
    }),
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
    }),
    defineField({
      name: 'identity_link',
      title: 'Identity Link (logo or a profile phote)',
      type: 'string',
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
    defineField({
      name: 'transactionId',
      title: 'Transaction ID',
      type: 'string',
      readOnly: true
    }),
  ]
})