import { Schema, model, Document } from 'mongoose'

export interface TshirtDocument extends Document {
  description: string
  material: string
  colour: string
  size: string
  reference: number
  prize: number
  order: string[]
}

const TshirtSchema = new Schema<TshirtDocument>(
  {
    description: { type: String, required: true },
    material: { type: String, required: true },
    colour: { type: String, required: true },
    size: { type: String, required: true },
    reference: { type: Number, required: true, unique: true },
    prize: { type: Number, required: true },
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

export default model('Tshirt', TshirtSchema)
