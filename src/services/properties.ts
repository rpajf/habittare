import Property, { PropertyType } from '@/models/Property'
import { Document, Query } from 'mongoose'

export async function getAllProperties(): Promise<any> {
  return Property.find({}).exec()
}

export async function getAllPropertiesWithFilter(
  filter: Record<string, unknown>
): Promise<any> {
  return Property.find(filter).exec()
}

export async function getOneProperty(
  filter: Record<string, unknown>
): Promise<any> {
  return Property.findOne(filter).exec()
}

export async function getHomePageProperties(): Promise<any> {
  const filter = { tags: { $in: ['destaque-site'] } }
  return Property.find(filter).exec()
}

export async function getLatestProperties(): Promise<any> {
  return Property.find().sort({ dataCadastro: -1 }).limit(5).exec()
}

export async function createProperty(property: PropertyType): Promise<any> {
  return Property.create(property)
}
