import { MixerVerticalIcon } from "@radix-ui/react-icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: 'booking-type',
  title: 'Booking Type',
  type: 'document',
  icon: MixerVerticalIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'duration_count',
      title: 'Duration count (hour, minutes)',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'price_gdes',
      title: 'Prix en gourdes',
      type: 'number'
    }),
    defineField({
      name: 'price_usd',
      title: 'Prix en dollar',
      type: 'number'
    }),
  ]
})