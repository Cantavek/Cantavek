import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID 
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-06-20'
export const SanityToken = process.env.SECRET_SANITY_VIEW_TOKEN

// npm i next-sanity @portabletext/react @sanity/image-url stripe

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: SanityToken,
  useCdn: false,
  // perspective: 'published',
})

