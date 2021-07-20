
const initialState = {
    products: [],
}

export function productReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.products
            }
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.product]
            }
        case 'UPDATE_PRODUCT':
            return {
                ...state,
                products: state.products.map(product => {
                    if (product._id === action.product._id) return action.product;
                    return product;
                })
            }
        case 'REMOVE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(product => product._id !== action.productId)
            }
        default:
            return state;
    }
}