import mongoose from 'mongoose'

const formSchema = new mongoose.Schema({
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

const Form = mongoose.model('Form', formSchema)

export default Form
