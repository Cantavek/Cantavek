import { CreditCardIcon } from "@sanity/icons";
import { defineField } from "sanity";

export default defineField({
  name: 'purchase',
  title: 'Purchase',
  type: 'document',
  icon: CreditCardIcon,
  fields: [
    defineField({
      name: 'user',
      title: 'User',
      type: 'reference',
      to: { type: 'user' }
    }),
    defineField({
      name: 'bundle',
      title: 'Bundle',
      type: 'reference',
      to: { type: 'bundle' }
    }),
    defineField({
      name: 'expire_at',
      type: 'datetime',
    })
  ],
  preview: {
    select: {    
      username: 'user.name',
      bundle: 'bundle.name'
    },
    prepare({ username, bundle }) {
      return {
        title: `User: ${username}`,
        subtitle: `Bundle: ${bundle}`
      }
    }
  }
})