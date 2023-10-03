import { client } from "./client";

export type Bundle = {
  _id: string,
  name: string,
  duration: number,
  price_gdes: string,
  price_usd: string,
  accesses: string[],
}

export const getAllBundle  = async () => {
  return client.fetch<Bundle[]>(`*[_type == "bundle"] | order(_createdAt asc){
    _id,
    duration,
    name,
    price_gdes,
    price_usd,
    accesses
  }`)
} 