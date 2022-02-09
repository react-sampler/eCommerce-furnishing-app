import { applyMiddleware, combineReducers, createStore } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import { productsListReducer } from './reducer/productReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    productList: productsListReducer

})

const intialState = {}

const middleware = [thunk]

const store = createStore(reducer, intialState, composeWithDevTools
    (applyMiddleware(...middleware)))

export default store