import { createClient } from "next-sanity";
// import type {QueryParams} from '@sanity/client'


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID 
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-06-20'
export const SanityToken = process.env.SECRET_SANITY_VIEW_TOKEN

// npm i @portabletext/react @sanity/image-url

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: SanityToken,
  useCdn: false,
  // perspective: 'published',
})

// const DEFAULT_PARAMS = {} as QueryParams
// const DEFAULT_TAGS = [] as string[]

// export async function sanityFetch<QueryResponse>({
//   query,
//   params = DEFAULT_PARAMS,
//   tags = DEFAULT_TAGS,
// }: {
//   query: string
//   params?: QueryParams
//   tags: string[]
// }): Promise<QueryResponse> {
//   return client.fetch<QueryResponse>(query, params, {
//     cache: 'force-cache',
//     next: {
//       //revalidate: 30, // for simple, time-based revalidation
//       tags, // for tag-based revalidation
//     },
//   })
// }