import type { NextApiRequest, NextApiResponse } from 'next'
import { createHandler } from '@/middlewares'
import Property from '@/models/Property'
import { fetchPropertiesFromJetmobi } from '@/services/jetmobiApi'

// TODO Function
async function _updateExistentProperty(doc) {
  console.log('atualizando', doc.codigo)
}

async function _mapNewProperties(properties) {
  const newProperties = []

  for (let i = 0; i < properties.length; i++) {
    const property = properties[i]
    const doc = await Property.findOne({ codigo: property.codigo }).exec()

    if (doc) {
      // await Property.findByIdAndUpdate(doc._id, property).exec()
      console.log('atualizou', property.dataCadastro)
    } else newProperties.push(property)
  }

  return newProperties
}

async function _getHandler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ status: 'Atualizando banco de dados...' })

  const properties = await fetchPropertiesFromJetmobi()

  const newProperties = await _mapNewProperties(properties)

  console.log(newProperties.length)
  if (newProperties.length > 0) {
    Property.insertMany(newProperties).then(x => {
      console.log('inseriu')
    })
  }
}

const handler = createHandler()

handler.get(_getHandler)

export default handler
