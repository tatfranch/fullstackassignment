import { RequestHandler } from 'express'

import Customer from '../models/Customer'
import CustomerService from '../services/customer'

export const getCustomers: RequestHandler = async (req, res, next) => {
  res.json(await CustomerService.findAll())
}

export const getOneCustomer: RequestHandler = async (req, res, next) => {
  res.json(await CustomerService.findById(req.params.customerId))
}

export const createCustomer: RequestHandler = async (req, res, next) => {
  res.json(await CustomerService.create(new Customer(req.body)))
}

export const updateCustomer: RequestHandler = async (req, res, next) => {
  const updateCustomer = await CustomerService.update(
    req.params.customerId,
    req.body
  )
  res.json(updateCustomer)
}

export const deleteCustomer: RequestHandler = async (req, res, next) => {
  res.json(await CustomerService.deleteCustomer(req.params.customerId))
}
