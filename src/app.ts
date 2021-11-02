import express from 'express'
import lusca from 'lusca'
import dotenv from 'dotenv'
import passport from 'passport'
import compression from 'compression'
import cors from 'cors'

import tshirtRouter from './routers/tshirt'
import customerRouter from './routers/customer'
import orderRouter from './routers/order'

import loginRouter from './routers/google'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'

import { googleStrategy } from './config/passport'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.use(cors())
app.set('port', process.env.PORT || 3000)
app.use(apiContentType)
// Use common 3rd-party middlewares
app.use(compression())
app.use(express.json())
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))
app.use(passport.initialize())

//passport strategies
passport.use(googleStrategy)

app.use('/api/v1/tshirts', tshirtRouter)
app.use('/api/v1/customer', customerRouter)
app.use('/api/v1/order', orderRouter)

app.use('/api/v1/google', loginRouter)
// app.get('/logout', function (req, res) {
//   req.logout()
//   res.redirect('/')
// })
// Custom API error handler
app.use(apiErrorHandler)

export default app
