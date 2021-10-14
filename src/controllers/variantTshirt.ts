import { RequestHandler } from 'express'

import VariantTshirt from '../models/VariantTshirt'
import VariantTshirtService from '../services/variantTshirt'

export const getTshirts: RequestHandler = async (req, res, next) => {
  res.json(await VariantTshirtService.findAll())
}

export const getOneTshirt: RequestHandler = async (req, res, next) => {
  res.json(await VariantTshirtService.findById(req.params.tshirtId))
}

export const createTshirt: RequestHandler = async (req, res, next) => {
  res.json(await VariantTshirtService.create(new VariantTshirt(req.body)))
}

export const updateTshirt: RequestHandler = async (req, res, next) => {
  const updateTshirt = await VariantTshirtService.update(
    req.params.tshirtId,
    req.body
  )
  res.json(updateTshirt)
}

export const deleteTshirt: RequestHandler = async (req, res, next) => {
  res.json(await VariantTshirtService.deleteTshirt(req.params.tshirtId))
}
