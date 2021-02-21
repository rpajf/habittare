import nextConnect from 'next-connect'
import databaseMiddleware from './db'

export function createHandler(...middleware) {
  return nextConnect().use(databaseMiddleware, ...middleware)
}
