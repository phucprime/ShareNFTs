import React from 'react';

export const signUpService = (type, data, props) => {
  return async dispatch => {
    try {
      props.navigation.navigate('Verify', {
        loginType: type,
        loginData: data,
      });
    } catch (e) {
      console.log(e.error);
    }
  };
};
