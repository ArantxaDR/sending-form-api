import { connectMongoDB } from '@/utils/MongoConnect'
import Form from '@/models/FormModel'

connectMongoDB()

export async function POST (request) {
  const body = await request.json()
  const newForm = new Form(body)
  const savedForm = await newForm.save()
  return new Response(JSON.stringify(savedForm))
}
