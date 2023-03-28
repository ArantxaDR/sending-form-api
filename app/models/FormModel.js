import { Schema, model, models } from 'mongoose'

const formSchema = new Schema({
  fullName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  phone: {
    type: Number,
    require: true
  },
  message: {
    type: String,
    require: true
  }
})

const Form = models.Form || model('Form', formSchema)

export default Form
