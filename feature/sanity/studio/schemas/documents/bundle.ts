import { PackageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: 'bundle',
  title: 'Bundle',
  type: 'document',
  icon: PackageIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'duration',
      title: 'Duration (in month)',
      type: 'number'
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
    defineField({
      name: 'accesses',
      title: 'Access (List of accessibility the user will have)',
      type: 'array',
      of: [{ type: 'string'}]
    }),
  ]
})