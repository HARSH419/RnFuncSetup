import APIKit from './APIKit';
import Api_Url from './Api_Url';

export default {
  loginUser(formData: any) {
    return APIKit.post(Api_Url.login, formData, {headers: {}});
    // return APIKit.get(Api_Url.login, {headers: {Authkey: USER_TOKEN}});
  },
};
