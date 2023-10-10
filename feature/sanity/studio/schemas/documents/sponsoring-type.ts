import { InfoCircledIcon } from "@radix-ui/react-icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: 'sponsoring',
  title: 'Sponsoring Type',
  type: 'document',
  icon: InfoCircledIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string'
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

