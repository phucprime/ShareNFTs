import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  Platform,
  SafeAreaView,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../../Components/ResponsiveLayout";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { logInService } from "../../Store/Actions/Login";

const login = (props) => {
  const [activeButtonName, setActiveButtonName] = React.useState("email");
  const [text, setText] = React.useState("");
  const [placeholder, setPlaceholder] = React.useState("Email Address");
  const dispatch = useDispatch();

  const changeButtonName = (text) => {
    setActiveButtonName(text);
    text === "email"
      ? setPlaceholder("Email Address")
      : setPlaceholder("Phone Number");
  };

  const onChangeText = (text) => {
    setText(text);
  };

  const getLogin = async (activeButtonName, text, props) => {
    let action1;
    action1 = logInService(activeButtonName, text, props);
    dispatch(action1);
  };

  return (
    <SafeAreaView style={styles.container11}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "padding"}
        style={{
          width: Platform.OS === "android" ? null : null,
          height: Platform.OS === "android" ? hp("100%") : hp("100%"),
        }}
      >
        <ScrollView>
          <Image
            style={{
              width: wp("100%"),
              height: hp("58%"),
            }}
            source={require("../../Assets/Header.png")}
          />
          <View>
            <Text
              style={{
                color: "#fff",
                alignSelf: "center",
                fontSize: 18,
                marginTop: 10,
              }}
            >
              Login with
            </Text>

            {/*Email and Phone Buttons */}

            <View style={styles.selectionButtons}>
              <TouchableOpacity
                onPress={() => changeButtonName("email")}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    activeButtonName === "email" ? "#79e0d8" : "transparent",
                  height: "80%",
                  width: "49%",
                  marginLeft: "1%",
                  borderRadius: 10,
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: activeButtonName === "email" ? "#fff" : "#fff",
                    fontSize: 16,
                    fontWeight:
                      activeButtonName === "email" ? "bold" : "normal",
                  }}
                >
                  Email
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => changeButtonName("phone")}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    activeButtonName === "phone" ? "#79e0d8" : "transparent",
                  height: "80%",
                  width: "49%",
                  marginRight: "1%",
                  borderRadius: 10,
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: activeButtonName === "phone" ? "#fff" : "#fff",
                    fontSize: 16,
                    fontWeight:
                      activeButtonName === "phone" ? "bold" : "normal",
                  }}
                >
                  Phone
                </Text>
              </TouchableOpacity>
            </View>

            {/*Enter Text place */}

            <View style={styles.enterTextView}>
              <TextInput
                style={{ height: 60, padding: 10, width: "82%", color: "#000" }}
                onChangeText={onChangeText}
                value={text}
                placeholder={placeholder}
                placeholderTextColor={"#808080"}
              />
              <TouchableOpacity
                onPress={() => getLogin(activeButtonName, text, props)}
                style={styles.arrowButton}
              >
                <AntDesign name={"arrowright"} color={"#fff"} size={26} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default login;
