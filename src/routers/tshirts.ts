import { Router } from 'express'
import { getTshirts, createTshirt } from '../controllers/tshirts'

const router = Router()

router.route('/').get(getTshirts)

router.route('/create').post(createTshirt)

export default router
