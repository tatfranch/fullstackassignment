import { RequestHandler } from 'express'

import Tshirt from '../models/Tshirt'
import TshirtService from '../services/tshirt'

export const getTshirts: RequestHandler = async (req, res, next) => {
  res.json(await TshirtService.findAll())
}

export const getOneTshirt: RequestHandler = async (req, res, next) => {
  res.json(await TshirtService.findById(req.params.tshirtId))
}

export const createTshirt: RequestHandler = async (req, res, next) => {
  res.json(await TshirtService.create(new Tshirt(req.body)))
}

export const updateTshirt: RequestHandler = async (req, res, next) => {
  const updateTshirt = await TshirtService.update(req.params.tshirtId, req.body)
  res.json(updateTshirt)
}

export const deleteTshirt: RequestHandler = async (req, res, next) => {
  res.json(await TshirtService.deleteTshirt(req.params.tshirtId))
}
