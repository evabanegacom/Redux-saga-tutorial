import { call, put, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
const apiUrl = "https://neptune-spear.herokuapp.com/api/v1/login";

const register = async (userInfo:any) => {
  console.log('payload', userInfo.payload)
  return await axios
    .post(apiUrl, userInfo.payload, {
      headers: {
        "Content-type": "application/json",
        "Accept": 'application/json',
      },
    }).then((res) =>{ return res })
    .catch((error) => {
      throw error;
    });
};

// const register = (payload:object) => {
//   return fetch(apiUrl, {
//     method: 'POST',
//       headers: {
//         "Content-type": 'application/json',
//         "Accept": 'application/json',
//       },
//       body: JSON.stringify(payload)
//   }).then(res => res.json())
//   .catch((error) => {
//     throw error
//   })
// }
// register({name: 'louis', email: 'amaka@yahoo.com ' , password: '123456', password_confirmation: '123456'});
function* userLogin(userInfo:any) {
  console.log('secondpayload', userInfo)
  try {
    const signUp:AxiosResponse = yield call(register, userInfo);
    // const productsAlternative:Array<object> = yield call(getApi);
    console.log("userRegistration", signUp.data);
    yield put({ type: "LOGIN_SUCCESS", payload: signUp.data });
  } catch (error:any) {
    yield put({ type: "LOGIN_FAIL", message: error.message });
  }
}

function* login() {
  yield takeEvery("BEGIN_LOGIN", userLogin);
}

export default login;
