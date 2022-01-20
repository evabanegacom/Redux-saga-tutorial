import * as type from '../types';

export function getProducts() {
  return {
    type: type.GET_PRODUCTS_REQUESTED,
  }
}

