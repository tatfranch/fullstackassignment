import { Router } from 'express'
import {
  getTshirts,
  getOneTshirt,
  createTshirt,
  updateTshirt,
  deleteTshirt,
} from '../controllers/tshirt'

const router = Router()

router.route('/').get(getTshirts)
router.route('/:tshirtId').get(getOneTshirt)
router.route('/').post(createTshirt)
router.route('/:tshirtId').delete(deleteTshirt)
router.route('/').put(updateTshirt)

export default router
