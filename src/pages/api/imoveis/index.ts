import type { NextApiRequest, NextApiResponse } from 'next'
import { createHandler } from '@/middleware'
import { getAllProperties } from '@/services/properties'

async function _getHandler(req: NextApiRequest, res: NextApiResponse) {
  const properties = await getAllProperties()
  res.status(200).send(properties)
}

const handler = createHandler()

handler.get(_getHandler)

export default handler
