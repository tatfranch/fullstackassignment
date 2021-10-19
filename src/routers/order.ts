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
router.route('/:orderId').post(createOrder)
router.route('/:orderId').delete(updateOrder)
router.route('/').post(deleteOrder)

export default router
