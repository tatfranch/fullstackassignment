import { RequestHandler } from 'express'

import Order from '../models/Order'
import OrderService from '../services/order'

export const getOrders: RequestHandler = async (req, res, next) => {
  res.json(await OrderService.findAll())
}

export const getOneOrder: RequestHandler = async (req, res, next) => {
  res.json(await OrderService.findById(req.params.orderId))
}

export const createOrder: RequestHandler = async (req, res, next) => {
  res.json(await OrderService.create(new Order(req.body)))
}

export const updateOrder: RequestHandler = async (req, res, next) => {
  const updateOrder = await OrderService.update(req.params.orderId, req.body)
  res.json(updateOrder)
}

export const deleteOrder: RequestHandler = async (req, res, next) => {
  res.json(await OrderService.deleteOrder(req.params.orderId))
}
