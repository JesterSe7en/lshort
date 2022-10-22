/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../db/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query['slug']
  console.log(slug)

  if (!slug || typeof slug !== 'string') {
    res.statusCode = 400
    res.send(JSON.stringify({ message: 'slug required' }))
    return
  }

  const data = await prisma?.shortLink.findFirst({
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  console.log(data)

  if (!data || !data.url)  {
    res.statusCode = 400
    res.send(JSON.stringify({ message: 'slug not found' }))
    return
  }

  return res.redirect(data.url)
}

