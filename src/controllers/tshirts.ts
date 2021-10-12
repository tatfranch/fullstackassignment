import { RequestHandler } from 'express'

import TshirtModel from '../models/Tshirt'

export const getTshirts: RequestHandler = async (req, res, next) => {
  const query = await TshirtModel.find()

  res.status(200).json({ data: query })

  res.end()
}

export const createTshirt: RequestHandler = async (req, res, next) => {
  const query = await TshirtModel.create(req.body)

  res.status(200).json({ sucess: true })

  res.end()
}
