import axios from 'axios'
import { mapImoveisJetimobAPIToMongo } from '@/integrations/jetmobi'
import { PropertyType } from '@/models/Property'

const jetmobiUrl = `https://api.jetimob.app/webservice/${process.env.JETMOBI_API_KEY}`

export const fetchPropertiesFromJetmobi = async (): Promise<
  Array<PropertyType>
> => {
  const { data } = await axios.get(`${jetmobiUrl}/imoveis`, {
    params: { v: 'v2' }
  })
  const properties = await mapImoveisJetimobAPIToMongo(data)
  return properties
}
