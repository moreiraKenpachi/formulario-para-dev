import { Routes, Route } from 'react-router-dom'

import PaymentPage  from './pages/Payment'
import SuccessPage from './pages/Sucess'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='formulario' element={<PaymentPage />}/>
      <Route path=':customerId' element={<SuccessPage />}/>
    </Routes>
  )
}
