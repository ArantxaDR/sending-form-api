import { NextResponse } from 'next/server'
import { connectMongoDB } from '@/utils/MongoConnect'
import Form from '@/models/FormModel'
// import mongoose from 'mongoose'

connectMongoDB()
export async function GET () {
  return NextResponse.json({ hello: 'world' })
}
export async function POST (request) {
  const body = await request.json()
  const newForm = new Form(body)
  const savedForm = await newForm.save()
  return new Response(JSON.stringify(savedForm))
}
