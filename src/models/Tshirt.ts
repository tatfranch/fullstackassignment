import { Schema, model, Document } from 'mongoose'

export interface TshirtDocument extends Document {
  itemType: string
  colour: string
  size: string
  reference: number
  prize: number
  orderID: number[]
}

const TshirtSchema = new Schema<TshirtDocument>(
  {
    itemType: { type: String, required: true },
    colour: { type: String },
    size: { type: String, required: true },
    reference: { type: Number, required: true, unique: true },
    prize: { type: Number, required: true },
    orderID: [
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

export default model('Tshirt', TshirtSchema)
