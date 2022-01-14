import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../../Components/ResponsiveLayout";
import { useDispatch } from "react-redux";
import { signUpService } from "../../Store/Actions/SignUp";
import { userDetailService } from "../../Store/Actions/UserInfo";
import { verifySignUpService } from "../../Store/Actions/VerifySignUp";

const CELL_COUNT = 6;

const VerificationCode = (props) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const verify = async (type, code, data, props) => {
    console.log(type);
    console.log(data);
    let action1;
    action1 = verifySignUpService(type, code, data, props);
    dispatch(action1);

    let action2;
    action2 = userDetailService();
    dispatch(action2);
  };

  const resend = async (type, data, props) => {
    let action3;
    action3 = signUpService(type, data, props);
    dispatch(action3);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <ScrollView>
        <View style={styles.mainContainer}>
          {/*top bar image*/}
          <ImageBackground
            source={require("../../Assets/Header.png")}
            style={{
              width: "100%",
              height: 150,
            }}
          >
            <View style={styles.imageView}>
              <Image
                style={{
                  width: wp("50%"),
                  height: hp("7%"),
                  marginTop: 10,
                }}
                source={require("../../Assets/logo.png")}
              />
            </View>
          </ImageBackground>

          <View style={styles.lineStyle} />

          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#000",
              marginTop: 30,
            }}
          >
            Enter Verification Code
          </Text>
          <Text style={{ fontSize: 16, marginTop: 30 }}>
            We've sent a 6-digit Verification code to
          </Text>
          <Text style={{ fontSize: 16, marginTop: 5 }}>the email address</Text>
          <Text style={{ color: "#4D8EFC", fontSize: 16, marginTop: 5 }}>
            {`<your email address>`}
          </Text>

          {/*Verification code */}

          <Text style={{ fontSize: 16, marginTop: 30 }}>
            Enter Verification Code
          </Text>
          <SafeAreaView style={styles.root}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}
                >
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </SafeAreaView>
        </View>

        {/*Verify button*/}
        {value.length !== 6 && (
          <TouchableOpacity
            onPress={() =>
              verify(
                props.route.params.loginType,
                value,
                props.route.params.loginData,
                props
              )
            }
            style={{
              height: hp("8%"),
              width: wp("85%"),
              backgroundColor: "#C4C4C4",
              borderRadius: 10,
              alignSelf: "center",
              top: 90,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ color: "#968E8E", fontSize: 18, fontWeight: "bold" }}
            >
              Verify and Continue
            </Text>
          </TouchableOpacity>
        )}
        {value.length === 6 && (
          <TouchableOpacity
            onPress={() =>
              verify(
                props.route.params.loginType,
                value,
                props.route.params.loginData,
                props
              )
            }
            style={{
              height: hp("8%"),
              width: wp("85%"),
              backgroundColor: "#4D8EFC",
              borderRadius: 10,
              alignSelf: "center",
              top: 90,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
              Verify and Continue
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={() => props.navigation.navigate("Signin")}
          style={styles.cancelButton}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Cancel</Text>
        </TouchableOpacity>

        <View style={styles.line2} />

        {/*Code not reveived*/}
        <View style={styles.notReceiveView}>
          <Text style={styles.notReceiveText}>Didn't receive your code?</Text>
          <TouchableOpacity>
            <Text style={styles.differentMailText}>
              Send to a different email address
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              resend(
                props.route.params.loginType,
                props.route.params.loginData,
                props
              )
            }
          >
            <Text style={styles.resendCodeText}>Resend your code</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerificationCode;
