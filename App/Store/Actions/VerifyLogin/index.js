import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const verifyLoginService = (type, code, data, props) => {
  return async dispatch => {
    try {
      alert(resData.message);
      saveDataToStorage(resData.token);
      props.navigation.navigate('Home');
    } catch (e) {
      console.log(e.error);
    }
  };
};

const saveDataToStorage = token => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      token: token,
    }),
  );
};
