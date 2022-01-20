import * as type from '../types';

// export function beginSignup(data:any) {
//     return {
//       type: types.BEGIN_SIGNUP,
//       payload: data
//     }
//   }

  // export const beginSignup = (data:any) => {
  //   return {
  //     type: types.BEGIN_SIGNUP,
  //     payload: data
  //   }
  // };

  export const beginSignup = (data:any) => ({
    type: 'BEGIN_SIGNUP',
    payload: data,
  });

  export const beginLogin = (data:any) => ({
    type: 'BEGIN_LOGIN',
    payload: data,
  });

  export const logOut = () => ({
    type: type.LOGOUT,
  });