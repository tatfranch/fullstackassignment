import { Schema, model, Document } from 'mongoose'

export interface TshirtDocument extends Document {
  productType: string[]
  orderID: string[]
}

const TshirtSchema = new Schema<TshirtDocument>(
  {
    productType: [
      {
        type: Schema.Types.ObjectId,
        ref: 'VariantTshirt',
      },
    ],
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
