import { Router } from 'express'
import {
  getCustomers,
  getOneCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from '../controllers/customer'

const router = Router()

router.route('/').get(getCustomers)
router.route('/:customerId').get(getOneCustomer)
router.route('/').post(createCustomer)
router.route('/:customerId').delete(deleteCustomer)
router.route('/').put(updateCustomer)

export default router
