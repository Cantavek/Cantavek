import { PortableText } from '@portabletext/react'
import { urlForImage } from '.'


const PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return `
        <picture>
          <source
            srcset="${urlForImage(value.asset).format('webp').url()}"
            type="image/webp"
          />
          <img
            class="responsive__img"
            src="${urlForImage(value.asset).url()}"
            alt="${value.alt}"
          />
        </picture>
        `;
      },
  },

  marks: {
    link: ({children, value}: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
  },
}
const BlockText = (props: any) => {
  return (
    <PortableText value={props.value} components={PortableTextComponents} />
  )
}

export default BlockText