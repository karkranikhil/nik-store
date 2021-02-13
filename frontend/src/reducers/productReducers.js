import * as PRODUCT_CONSTANTS from '../constants/productConstants'
const initialState = {
  products: [],
}
export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_CONSTANTS.PRODUCT_LIST_REQUEST:
      return { ...state, loading: true}
    case PRODUCT_CONSTANTS.PRODUCT_LIST_SUCCESS:
        return { ...state, loading: false, products:action.payload }
    case PRODUCT_CONSTANTS.PRODUCT_LIST_FAIL:
        return { ...state, loading: false, error:action.payload }
    default:
        return state
  }
}
