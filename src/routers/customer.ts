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
router.route('/:customerId').post(createCustomer)
router.route('/:customerId').delete(updateCustomer)
router.route('/').post(deleteCustomer)

export default router
