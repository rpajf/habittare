import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

export default async function dbMiddleware(req, res, next) {
  const globalAny: any = global

  try {
    if (!globalAny.mongoose) {
      globalAny.mongoose = await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      })
    }
  } catch (ex) {
    console.error(ex)
  }

  return next()
}

export function jsonify(obj) {
  return JSON.parse(JSON.stringify(obj))
}
