import axios from 'axios'
import { CustomerData } from '../interfaces/CustomerData'

const api = axios.create({
  baseURL: process.env.PORT,
})

export const getCustomers = () => api.get<CustomerData[]>('/clientes')

export const processCheckout = (customer: CustomerData) => api.post('/customers', {
  customer: {
    fullName: customer.fullName,
    email: customer.email,
    mobile: customer.mobile,
    document: customer.document
  }
})

export default api
