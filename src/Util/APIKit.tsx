
import axios from 'axios';
import { showErrorMessage } from './AppUtils';
// import addOAuthInterceptor from 'axios-oauth-1.0a';
const APIKit = axios.create({
  baseURL: 'https://local.com/',
  maxBodyLength: Infinity,
  timeout: 1000000,
  withCredentials: false // for disable cookies bcoz of which we get 401 error after login
});

APIKit.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // let response_res1 = response?.request?.responseURL
    // console.log('====================================');
    // console.log({response_res1: response?.request?.responseURL});
    // console.log('====================================');
    // console.log({data: response?.data});
    if (response?.data?.meta?.status == false) {
      return Promise.reject(response);
    }
    if (response.status == 401) {
      // EventRegister.emit('Logout_User', {
      //   message: 'Session expire, Please login again',
      // });
    }
    return response;
  },
  function (error) {
    // console.log({ request: error?.request });
    console.log({ responseURL: error?.request?._url });
    let errorResponse=JSON.stringify(error?.response?.data?.code)
    let errorMessage=JSON.stringify(error?.response?.data?.message)
    if (error.response.status == 400) {
      showErrorMessage(errorMessage)

      // EventRegister.emit('Logout_User', {
      //   message: 'Session expire, Please login again',
      // });
    }
    if (error?.response.status == 401) {
      showErrorMessage("Invalid credentials")
      // EventRegister.emit('Logout_User', {
      //   message: 'Session expire, Please login again',
      // });
    }
    //console.log("errorerrorerrorerrorerror",JSON.stringify(error.response.data.message))
    console.log({ error_res: Object.keys(error) });
    console.log({ code: error?.code, message: error?.message });
    return error;
  },
);
export default APIKit;