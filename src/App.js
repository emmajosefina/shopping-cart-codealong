import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers} from '@reduxjs/toolkit'

import { Products } from 'components/Products'
import { Cart } from 'components/Cart'

import { cart } from 'reducers/cart'
import { products } from 'reducers/products'

// one way of combining everything together, there are different ways of doing this
const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer
})

const store = configureStore ({ reducer })

export const App = () => (
  // providing the store so we can use hooks, dispatch etc
  <Provider store={store}>
    <Cart />
    <Products />
  </Provider>
)
