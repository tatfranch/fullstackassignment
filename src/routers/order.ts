import { Router } from 'express'
import {
  getOrders,
  getOneOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} from '../controllers/order'

const router = Router()

router.route('/').get(getOrders)
router.route('/:orderId').get(getOneOrder)
router.route('/').post(createOrder)
router.route('/:orderId').delete(deleteOrder)
router.route('/').put(updateOrder)

export default router
