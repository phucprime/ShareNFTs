import React, { useState, useMemo, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "../Screens/Dashboard/DashboardScreen";
import SigninScreen from "../Screens/SignIn/SigninScreen";
import VerificationCode from "../Screens/VarificationCode/VarificationCode";
import CreateNFTScreen from "../Screens/CreateNFT/CreateNFTScreen";
import PreviewNFT from "../Screens/CreateNFT/PreviewNFT";
import SendNFT from "../Screens/SendNFT/SendNFT";
import CreateAccount from "../Screens/CreateAccount/CreateAccount";
import SecureAccount from "../Screens/SecureAccount/SecureAccount";
import login from "../Screens/SignIn/login";
import loginVerify from "../Screens/VarificationCode/loginVerify";
import ClaimNFT from "../Screens/ClaimNFT/ClaimNFT";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Settings from "../Screens/Settings/Settings";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DashboardStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/*<Stack.Screen name="Splash" component={SplashScreen} />*/}
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="loginVerify" component={loginVerify} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="SecureAccount" component={SecureAccount} />
      <Stack.Screen name="Home" component={DashboardScreen} />
      <Stack.Screen name="Verify" component={VerificationCode} />
      <Stack.Screen name="createNFT" component={CreateNFTScreen} />
      <Stack.Screen name="PreviewNFT" component={PreviewNFT} />
      <Stack.Screen name="SendNFT" component={SendNFT} />
    </Stack.Navigator>
  );
};

const MainDrawer = (props) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Home" component={DashboardScreen} />
      <Drawer.Screen name="createNFT" component={CreateNFTScreen} />
      <Drawer.Screen name="SendNFT" component={SendNFT} />
      <Drawer.Screen name="Claim NFT" component={ClaimNFT} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      {/*{ token == null ? <MainDrawer/> : <DashboardStack/>}*/}
      {/*{ token == null ? <DashboardStack/> : <MainDrawer/>}*/}
      <DashboardStack />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  drawerStyle: {
    width: "70%",
    elevation: 30,
    shadowOpacity: 5,
    borderBottomWidth: 1,
  },
});
export default AppNavigator;
