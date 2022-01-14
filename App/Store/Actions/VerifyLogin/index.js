import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const verifyLoginService = (type, code, data, props) => {
  return async (dispatch) => {
    try {
      if (code === "111111") {
        props.navigation.navigate("Home");
      } else {
        alert("demo code is 111111");
      }
    } catch (e) {
      console.log(e.error);
    }
  };
};

const saveDataToStorage = (token) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      token: token,
    })
  );
};
