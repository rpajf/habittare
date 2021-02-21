import type { NextApiRequest, NextApiResponse } from 'next'
import { createHandler } from '@/middleware'
import Property from '@/models/Property'

async function _getHandler(req: NextApiRequest, res: NextApiResponse) {
  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id

  const properties = await Property.findOne({
    codigo: id
  }).exec()
  res.status(200).send(properties)
}

const handler = createHandler()

handler.get(_getHandler)

export default handler
