import { applyMiddleware, combineReducers, createStore } from 'redux'
import { productsDetailsReducer, productsListReducer } from './reducer/productReducer'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    productList: productsListReducer,
    productDetails: productsDetailsReducer,

})

const intialState = {}

const middleware = [thunk]

const store = createStore(reducer, intialState, composeWithDevTools
    (applyMiddleware(...middleware)))

export default store