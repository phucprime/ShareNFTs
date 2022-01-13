import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const FETCH_USER = 'FETCH_USER';

export const userDetailService = () => {
  return async (dispatch, getState) => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      const transformedUserData = JSON.parse(userData);
      const {token} = transformedUserData;
    } catch (e) {
      console.log(e.error);
    }
  };
};
