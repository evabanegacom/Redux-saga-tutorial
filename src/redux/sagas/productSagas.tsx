import { call, put, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
const apiUrl = "https://neptune-spear.herokuapp.com/api/v1/products";

// const getApi = () => {
//   return fetch(apiUrl, {
//       headers: {
//         "Content-type": 'application/json',
//         Accept: 'application/json',
//       }
//   }).then(res => res.json())
//   .catch((error) => {
//     throw error
//   })
// }

const getApi = () => {
  return axios
    .get(apiUrl, {
      headers: {
        "Content-type": "application/json",
      },
    })
    .catch((error) => {
      throw error;
    });
};

function* fetchProducts() {
  try {
    const products:AxiosResponse = yield call(getApi);
    // const productsAlternative:Array<object> = yield call(getApi);
    // console.log("products", products);
    yield put({ type: "GET_PRODUCTS_SUCCESS", products: products.data });
  } catch (error:any) {
    yield put({ type: "GET_PRODUCTS_FAILURE", message: error.message });
  }
}

function* productSaga() {
  yield takeEvery("GET_PRODUCTS_REQUESTED", fetchProducts);
}

export default productSaga;
