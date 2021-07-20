import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';


import { productReducer } from './reducers/productReducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  productModule: productReducer

})

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
