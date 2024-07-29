import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'

import { CartProvider } from './contexts/CartContext'

export default function App() {

  return (
    <BrowserRouter>
      <Theme>
        <CartProvider>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </CartProvider>
      </Theme>
    </BrowserRouter>
  )
}
