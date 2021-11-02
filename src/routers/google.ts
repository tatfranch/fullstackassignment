import express, { Response, Request } from 'express'
import passport from 'passport'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../util/secrets'
import { CustomerDocument } from '../models/Customer'

const router = express.Router()

router.post(
  '/login',
  passport.authenticate('google-id-token', { session: false }),
  (req: Request, res: Response) => {
    const userData = req.user as CustomerDocument

    const token = jwt.sign(userData, JWT_SECRET, { expiresIn: '2h' })
    console.log('user', userData)
    res.json({ token: token })
  }
)

router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/api/v1/tshirts')
})

export default router
