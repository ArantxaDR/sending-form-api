import { Schema, model, models } from 'mongoose'

const formSchema = new Schema({
  id: {
    type: String,
    require: true,
    unique: true
  },
  fullName: {
    type: String,
    trim: true,
    require: [true, 'A full name is required'],
    minLength: [3, 'The name must have more than 10 characters']
  },
  email: {
    type: String,
    require: [true, 'A valid email is required']
  },
  phone: {
    type: Number
  },
  message: {
    type: String,
    require: [true, 'The message is required '],
    minLength: [10, 'The message must have more than 10 characters']
  }
})

const Form = models.Form || model('Form', formSchema)

export default Form
