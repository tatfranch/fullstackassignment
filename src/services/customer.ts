import Customer, { CustomerDocument } from '../models/Customer'
import { NotFoundError } from '../helpers/apiError'

const create = async (
  customer: CustomerDocument
): Promise<CustomerDocument> => {
  return customer.save()
}

const findById = async (customerId: string): Promise<CustomerDocument> => {
  const foundCustomer = await Customer.findById(customerId)

  if (!foundCustomer) {
    throw new NotFoundError(`Customer ${customerId} not found`)
  }

  return foundCustomer
}

const findAll = async (): Promise<CustomerDocument[]> => {
  return Customer.find().sort({ name: 1, email: 1 })
}

const update = async (
  customerId: string,
  update: Partial<CustomerDocument>
): Promise<CustomerDocument | null> => {
  const foundCustomer = await Customer.findByIdAndUpdate(customerId, update, {
    new: true,
  })

  if (!foundCustomer) {
    throw new NotFoundError(`Customer ${customerId} not found`)
  }

  return foundCustomer
}

const deleteCustomer = async (
  customerId: string
): Promise<CustomerDocument | null> => {
  const foundCustomer = Customer.findByIdAndDelete(customerId)

  if (!foundCustomer) {
    throw new NotFoundError(`Customer ${customerId} not found`)
  }

  return foundCustomer
}

type Profile = {
  email: string
  firstName: string
  lastName: string
}
const findOrCreate = async (userProfile: Profile) => {
  // eslint-disable-next-line
  const { email, firstName, lastName } = userProfile

  const customer = await Customer.findOne({ email: email })
  if (!customer) {
    const newCustomer = new Customer({ email, firstName, lastName })

    const createdCustomer = await newCustomer.save()
    return createdCustomer
  } else {
    return customer
  }
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteCustomer,
  findOrCreate,
}
