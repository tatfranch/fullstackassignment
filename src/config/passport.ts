import passport from 'passport'
import passportLocal from 'passport-local'
import GoogleTokenStrategy from 'passport-google-id-token'
import { Strategy } from 'passport-jwt'

import { Request, Response, NextFunction } from 'express'

import CustomerService from '../services/customer'

//const LocalStrategy = passportLocal.Strategy

export const googleStrategy = new GoogleTokenStrategy(
  {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  async (parsedToken: any, googleId: any, done: any) => {
    console.log('parsed token', parsedToken)
    //eslint-disable-next-line
    const { email, name, picture, given_name, family_name } =
      parsedToken.payload

    const user = await CustomerService.findOrCreate(email)

    done(null, { user })
  }
)
