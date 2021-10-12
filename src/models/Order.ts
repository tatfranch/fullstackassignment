import { Schema, model, Document } from 'mongoose'

interface Order extends Document {
  orderNumber: number

  //CUSTOMER INFO:
  customerFirstName: string
  customerLastName: string
  customerAdress: string
  shipmentDate: number
  productCart: string[]
}

const OrderSchema = new Schema<Order>(
  {
    orderNumber: { type: Number, unique: true },
    customerFirstName: { type: String, required: true },
    customerLastName: { type: String, required: true },
    customerAdress: { type: String, required: true },
    shipmentDate: { type: Number, required: true },
    productCart: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
      },
    ],
  },
  {
    timestamps: true,
  }
)

export default model('Order', OrderSchema)