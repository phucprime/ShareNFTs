import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';

export const verifySignUpService = (type, code, data, props) => {
  return async dispatch => {
    try {
      if (code == 111111) {
        props.navigation.navigate('CreateAccount', {
          loginType: type,
          loginData: data,
        });
      } else {
        alert('code demo is 111111');
      }
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
