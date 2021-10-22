import { Schema, model, Document } from 'mongoose'

export interface CustomerDocument extends Document {
  //CUSTOMER INFO:
  firstName: string
  lastName: string
  street: string
  city: string
  zip: number
  country: string
  phone: number
  email: string

  order: number[]
}

const CustomerSchema = new Schema<CustomerDocument>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    street: { type: String },
    city: { type: String },
    zip: { type: Number },
    country: { type: String },
    phone: { type: Number },
    email: { type: String, required: true, unique: true },

    order: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Order',
      },
    ],
  },
  {
    timestamps: true,
  }
)

export default model('Customer', CustomerSchema)
