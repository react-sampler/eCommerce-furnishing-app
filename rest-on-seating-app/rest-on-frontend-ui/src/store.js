import { applyMiddleware, combineReducers, createStore } from 'redux'
import { productsDetailsReducer, productsListReducer } from './reducer/productReducer'

import { cartReducer } from './reducer/cartReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    productList: productsListReducer,
    productDetails: productsDetailsReducer,
    cart: cartReducer

})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse
    (localStorage.getItem('cartItems')) : []

const intialState = {
    cart: { cartItems: cartItemsFromStorage }

} //get cart items or tokens /

const middleware = [thunk]

const store = createStore(reducer, intialState, composeWithDevTools
    (applyMiddleware(...middleware)))

export default store