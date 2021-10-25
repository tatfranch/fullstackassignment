import VariantTshirt, { TshirtDocument } from '../models/Tshirt'
import { NotFoundError } from '../helpers/apiError'

const create = async (
  variantTshirt: TshirtDocument
): Promise<TshirtDocument> => {
  return variantTshirt.save()
}

const findById = async (tshirtId: string): Promise<TshirtDocument> => {
  const foundTshirt = await VariantTshirt.findById(tshirtId)

  if (!foundTshirt) {
    throw new NotFoundError(`Tshirt ${tshirtId} not found`)
  }

  return foundTshirt
}

const findAll = async (): Promise<TshirtDocument[]> => {
  return VariantTshirt.find().sort({ itemType: 1, colour: 1 })
}

const update = async (
  tshirtId: string,
  update: Partial<TshirtDocument>
): Promise<TshirtDocument | null> => {
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
): Promise<TshirtDocument | null> => {
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
