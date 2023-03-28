import { NextResponse } from 'next/server'
import { connectMongoDB } from '@/app/utils/MongoConnect'
// import Form from '@/app/models/FormModel'
// import mongoose from 'mongoose'

// export default async function GET (res, req) {
//   res.status(201).send('Hi there')
//   // if (req.method !== 'POST') {
//   //   res.status(405).send({ msg: 'Only POST request is allowed' })
//   //   return
//   // }

//   // const { form } = req.body

//   // try {
//   //   await connectMongoDB()
//   //   Form.create({ form }).then((data) => {
//   //     console.log(data)
//   //     res.status(201).send(data)
//   //   })
//   // } catch (err) {
//   //   console.log(err)
//   //   res.status(400).send({ err, msg: 'Something went wrong' })
//   // }
// }
connectMongoDB()
export async function GET () {
  return NextResponse.json({ hello: 'world' })
}
export async function POST (request) {
  const body = await request.json()
  // console.log(body)
  //  mongoose.connect('mongodb+srv://arantxaderuiz:my4qjN3FIYQefStw@formdata.kobnjpp.mongodb.net/FormData?retryWrites=true&w=majority')

  // try {
  //   connectMongoDB()
  //   // Form.create({ body }).then(() => {
  //   //   // console.log(data)
  //   //   // res.status(201).send(data)
  //   //   return new Response(JSON.stringify(body)).status(201)
  //   // })
  //   return new Response(JSON.stringify(body)).status(201)
  // } catch (err) {
  //   console.log(err)
  //   return new Response(JSON.stringify({ err, msg: 'Something went wrong' })).status(400)
  // // res.status(400).send({ err, msg: 'Something went wrong' })
  // }
  return new Response(JSON.stringify(body))
}
