import UserModel from '../models/Customer'

const findOrCreate = async (userEmail: string) => {
  const user = await UserModel.findOne({ email: userEmail })
  if (!user) {
    const newUser = await UserModel.create
  } else {
    return user
  }
}

export default {
  findOrCreate,
}
