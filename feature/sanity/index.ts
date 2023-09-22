import { createClient } from "next-sanity";


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-06-20'
export const SanityAdapteroken = process.env.SECRET_SANITY_VIEW_TOKEN

// npm i next-sanity @portabletext/react @sanity/image-url stripe

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  // perspective: 'published',
})

