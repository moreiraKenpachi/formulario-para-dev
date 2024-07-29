import { createContext, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CustomerData } from '../interfaces/CustomerData'
import { processCheckout } from '../services/api'

interface Cliente {
  fullName: string
  email: string
  mobile: string
  document: string
}

interface CartContextProps {
  newcustomer: Cliente[]
  payOrder: (customer: CustomerData) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({children}:CartProviderProps) {
  const navigate = useNavigate()

  const localStorageKey = 'formulario:newdev'

  const [newcustomer, setNewCustomer] = useState<Cliente[]>(() => {
    const value = localStorage.getItem(localStorageKey) 
    if(value) return JSON.parse(value) 

    return []
  })

  function saveCliente(items: Cliente[]) {
    setNewCustomer(items)
    localStorage.setItem(localStorageKey, JSON.stringify(items)) 
  }

  function clearCart() {
    localStorage.removeItem(localStorageKey)
  }

  async function payOrder(customer: CustomerData) {

    const response = await processCheckout(customer);

    const cliente = [ ...newcustomer, customer];
    saveCliente(cliente);
    clearCart() 
    navigate(`/${response.data.id}`);
    return
  }

  return (
    <CartContext.Provider value={
      {
        payOrder,
        newcustomer
        }
    }>
      {children}
    </CartContext.Provider>
  )
}
