import { client } from "@/feature/sanity"
import { contactSchema } from "@/validations"
import { NextApiRequest, NextApiResponse } from "next"

type Data = {
  url?: string
  message: string
  error: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'POST') {
    const result = contactSchema.safeParse({t: "cff"})
    if(result.success) {
      client.create({
        _type: 'purchase',

      })
    }
    return res
      .status(200)
      .send({ message: "Something went wrong make you fill all the field.", error: true });
  }
}