import { Schema, model, Document } from 'mongoose'

export interface VariantTshirtDocument extends Document {
  description: string
  material: string
  colour: string
  size: string
  reference: number
  prize: number
  tshirt: string[]
}

const VariantTshirtSchema = new Schema<VariantTshirtDocument>(
  {
    description: { type: String, required: true },
    material: { type: String, required: true },
    colour: { type: String, required: true },
    size: { type: String, required: true },
    reference: { type: Number, required: true, unique: true },
    prize: { type: Number, required: true },
    tshirt: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tshirt',
      },
    ],
  },
  {
    timestamps: true,
  }
)

export default model('VariantTshirt', VariantTshirtSchema)
