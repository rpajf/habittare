import type { NextApiRequest, NextApiResponse } from 'next'
import { createHandler } from '@/middlewares'

async function _postHandler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(201).json({
    message:
      'Dados cadastrados com sucesso! Em breve entraremos em contato com voce.'
  })
}

const handler = createHandler()

handler.post(_postHandler)

export default handler
