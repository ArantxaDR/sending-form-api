import { NextResponse } from 'next/server'
// import { connectMongoDB } from '@/app/libs/MongoConnect'
// import Form from '@/app/models/FormModel'

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
export async function GET () {
  return NextResponse.json({ hello: 'world' })
}

export async function POST (request) {
  const body = await request.json()
  return new Response(JSON.stringify(body))
}
