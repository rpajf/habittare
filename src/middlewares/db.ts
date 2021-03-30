import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

export default async function dbMiddleware(req, res, next) {
  const globalAny: any = global

  try {
    if (!globalAny.mongoose) {
      await connectDb()
    }
  } catch (ex) {
    console.error(ex)
  }

  return next()
}

export async function connectDb() {
  const globalAny: any = global
  globalAny.mongoose = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
}

export function jsonify(obj) {
  return JSON.parse(JSON.stringify(obj))
}
