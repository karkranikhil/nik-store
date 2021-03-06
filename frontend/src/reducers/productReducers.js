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

const initialDetailsState = {
    product:{
        reviews:[]
    }
}
export const productDetailsReducer = (state = initialDetailsState, action) => {
    switch (action.type) {
      case PRODUCT_CONSTANTS.PRODUCT_DETAILS_REQUEST:
        return { ...state, loading: true}
      case PRODUCT_CONSTANTS.PRODUCT_DETAILS_SUCCESS:
          return { ...state, loading: false, product:action.payload }
      case PRODUCT_CONSTANTS.PRODUCT_DETAILS_FAIL:
          return { ...state, loading: false, error:action.payload }
      default:
          return state
    }
  }