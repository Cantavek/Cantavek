import { client } from "./client";

export type Bundle = {
  _id: string,
  name: string,
  duration: number,
  price_gdes: number,
  price_usd: number,
  accesses: string[],
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