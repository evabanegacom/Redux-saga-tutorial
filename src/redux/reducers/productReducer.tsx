import * as type from '../types';

const initState = {
  products: [],
  error: null,
  loading: false,
}

type Action = {
  type: string,
  products: Array<object>,
  message: string,
}

const productReducer = (state: object = initState, action: Action) => {
  switch (action.type) {
    case type.GET_PRODUCTS_REQUESTED:
      return {
        ...state,
        loading: true,
      }

    case type.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.products,
      }

    case type.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.message
      }

    default:
      return state
  }
}

export default productReducer;