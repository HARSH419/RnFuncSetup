import Snackbar from 'react-native-snackbar';
// import moment from 'moment';
import {Platform} from 'react-native';
import Colors from '../Constant/Colors';

export const isIOS = () => {
  return Platform.OS === 'ios';
};

export const showErrorMessage = (text: any) => {
  Snackbar.show({
    text: text,
    duration: Snackbar.LENGTH_SHORT,
    textColor: Colors.white,
    backgroundColor: Colors.redColor,
  });
};

export const showSucessMessage = (text: string) => {
  Snackbar.show({
    text: text,
    duration: Snackbar.LENGTH_LONG,
    textColor: Colors.white,
    backgroundColor: Colors.primary,
  });
};

export const serializeHeaders = (headers: any) => {
  // Serialize headers here, removing non-serializable values if any
  // For example, you can iterate through headers and extract only serializable values
  const serializableHeaders: any = {};
  for (const key in headers) {
    if (typeof headers[key] !== 'function') {
      serializableHeaders[key] = headers[key];
    }
  }
  return serializableHeaders;
};


// export const getFormatedDate = date => {
//   var dateReturn = '';
//   dateReturn = moment(new Date(date)).format('DD-MM-YYYY');
//   return dateReturn;
// };
