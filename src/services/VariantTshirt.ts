import VariantTshirt, { VariantTshirtDocument } from '../models/VariantTshirt'
import { NotFoundError } from '../helpers/apiError'

const create = async (
  variantTshirt: VariantTshirtDocument
): Promise<VariantTshirtDocument> => {
  return variantTshirt.save()
}

const findById = async (tshirtId: string): Promise<VariantTshirtDocument> => {
  const foundTshirt = await VariantTshirt.findById(tshirtId)

  if (!foundTshirt) {
    throw new NotFoundError(`Tshirt ${tshirtId} not found`)
  }

  return foundTshirt
}

const findAll = async (): Promise<VariantTshirtDocument[]> => {
  return VariantTshirt.find().sort({ itemType: 1, colour: 1 })
}

const update = async (
  tshirtId: string,
  update: Partial<VariantTshirtDocument>
): Promise<VariantTshirtDocument | null> => {
  const foundTshirt = await VariantTshirt.findByIdAndUpdate(tshirtId, update, {
    new: true,
  })

  if (!foundTshirt) {
    throw new NotFoundError(`Tshirt ${tshirtId} not found`)
  }

  return foundTshirt
}

const deleteTshirt = async (
  tshirtId: string
): Promise<VariantTshirtDocument | null> => {
  const foundTshirt = VariantTshirt.findByIdAndDelete(tshirtId)

  if (!foundTshirt) {
    throw new NotFoundError(`Tshirt ${tshirtId} not found`)
  }

  return foundTshirt
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteTshirt,
}
