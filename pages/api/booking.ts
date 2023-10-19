import { client } from "@/feature/sanity"
import { contactSchema } from "@/validations"
import dayjs from "dayjs"
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
    const result = contactSchema.safeParse(JSON.parse(req.body))
   
    if(result.success) {
      const { budget, ...rest } = result.data
      await client.create({
        _type: 'booking',
        ...rest,
        request_at: dayjs().toISOString(),
        type: { _ref: budget, _type: 'reference'},
      })
      return res
      .status(200)
      .send({ message: "Your booking have created sucessfully", error: false })
    }
    return res
      .status(200)
      .send({ message: "Something went wrong make you fill all the field.", error: true });
  }
}