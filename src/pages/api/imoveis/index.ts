import type { NextApiRequest, NextApiResponse } from 'next'
import { createHandler } from '@/middlewares'
import { getAllPropertiesWithFilter } from '@/services/properties'

import { _mountFilters } from '@/utils/api/helpers'

async function _getHandler(req: NextApiRequest, res: NextApiResponse) {
  const filter = _mountFilters(req.query) as Record<string, unknown>

  const properties = await getAllPropertiesWithFilter(filter)
  res.status(200).send(properties)
}

const handler = createHandler()

handler.get(_getHandler)

export default handler
