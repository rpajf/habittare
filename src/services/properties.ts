import Property, { PropertyType } from '@/models/Property'
import { Document, Query } from 'mongoose'

export async function getAllProperties(): Promise<any> {
  return Property.find({}).exec()
}

export async function getAllPropertiesWithFilter(
  filter: Query<PropertyType, Document>
): Promise<any> {
  return Property.find(filter).exec()
}

export async function getOneProperty(
  filter: Query<PropertyType, Document>
): Promise<any> {
  return Property.findOne(filter).exec()
}

export async function getHomePageProperties(): Promise<any> {
  const filter = { tags: { $in: ['destaque-site'] } }
  return Property.find(filter).exec()
}
