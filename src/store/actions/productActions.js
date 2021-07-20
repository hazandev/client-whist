import { productService } from '../../services/productService'

// THUNK action creators
// Work asynchronously with the service and dispatch actions to the reducers 

export function loadProducts() {
  return async dispatch => {
    try {
      const products = await productService.query();
      dispatch({ type: 'SET_PRODUCTS', products })
    } catch (err) {
      console.log('ProductActions: err in loadProducts', err)
    }
  }
}

export function removeProduct(productId) {
  return async dispatch => {
    try {
      await productService.remove(productId)
      dispatch({ type: 'REMOVE_PRODUCT', productId })
    } catch (err) {
      console.log('UserActions: err in removeUser', err)
    }
  }
}
//CHECK
export function saveProduct(product) {
  return async dispatch => {
    try {
      const type = product._id ? 'UPDATE_PRODUCT' : 'ADD_PRODUCT';
      const savedProduct = await productService.save(product)
      dispatch({ type, product: savedProduct })
    } catch (err) {
      console.log('Product Actions: err in add product', err)
    }
  }
}

export function updateProduct(product) {
  return async dispatch => {
    try {
      const updateproduct = await productService.save(product)
      dispatch({ type: 'UPDATE_PRODUCT', product: updateproduct })
      
    } catch (err) {
      console.log('Product Actions: err in update product', err)
    }
  }
}

