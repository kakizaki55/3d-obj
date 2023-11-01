// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// @ts-nocheck
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await getSession({ req })
  if( session ){
    res.status(200).json({ name: 'John Doe' })
  } else {
    res.status(401).json({ error: null })
  }
}

