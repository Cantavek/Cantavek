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
export type User = {
  _id: string,
  name: string,
  email: string
  active_bundle?: Bundle,
  active_bundle_expire_at?: string
}

export type Bundle = {
  _id: string,
  name: string,
  duration: number,
  price_gdes: number,
  price_usd: number,
  accesses: string[],
}

export type Video = {
  _id: string,
  title: string,
  duration: string,
  lock: boolean
  poster: string
  teaser?: string
  video?: string
}

export const getAllBundle = async () => {
  return client.fetch<Bundle[]>(`*[_type == "bundle"] | order(_createdAt asc){
    _id,
    duration,
    name,
    price_gdes,
    price_usd,
    accesses
  }`)
} 

export const getBundle = async (id: string) => {
  return client.fetch<Bundle>(`*[_type == "bundle" && _id == $id][0]{
    _id,
    duration,
    name,
    price_gdes,
    price_usd,
  }`, {id})
} 

export const getUserByEmail = async (email: string) => {
  return client.fetch<User>(`*[_type == "user" && email == $email][0]{
    _id,
    email,
    name,
    "active_bundle": active_bundle->{
      _id,
      name,
      duration,
    },
    active_bundle_expire_at
  }`, {email})
}

export const getVideos = () => {
  return client.fetch<Video[]>(`*[_type == "video"]{
    _id,
    title,
    lock,
    'poster': poster.asset->url,
    duration,
  }`)
}

export const getVideo = (id: string, unlock: boolean) => {
  if(unlock) {
    return client.fetch<Video>(`*[_type == "video" && _id == $id][0]{
      _id,
      title,
      lock,
      'poster': poster.asset->url,
      'video': video.asset->url,
      duration,
    }`, { id })
  }
  return client.fetch<Video>(`*[_type == "video" && _id == $id][0]{
    _id,
    title,
    lock,
    'poster': poster.asset->url,
    'teaser': teaser.asset->url,
    duration,
  }`, { id })
}

export const getOtherVideos = (id: string) => {
  return client.fetch<Video[]>(`*[_type == "video" && _id != $id][0...5]{
    _id,
    title,
    lock,
    'poster': poster.asset->url,
    'teaser': teaser.asset->url,
    duration,
  }`, { id })
}