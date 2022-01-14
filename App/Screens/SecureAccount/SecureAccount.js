import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../../Components/ResponsiveLayout";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

const SecureAccount = (props) => {
  const [text, setText] = React.useState("");

  const onChangeText = (text) => {
    setText(text);
  };

  return (
    <SafeAreaView>
      <StatusBar
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <ScrollView>
        <ImageBackground
          source={require("../../Assets/Header.png")}
          style={{
            width: "100%",
            height: 150,
          }}
        >
          <View
            style={{
              width: wp("100%"),
              justifyContent: "center",
              alignItems: "center",
              height: 110,
              top: 50,
              backgroundColor: "#eee",
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold", color: "#000" }}>
              Secure your Account
            </Text>
          </View>
          <View
            style={{
              width: wp("100%"),
              height: 2,
              backgroundColor: "#c4c4c4",
              marginTop: 20,
            }}
          ></View>
        </ImageBackground>
        <View>
          <Text style={{ alignSelf: "center" }}>STEP 2 OF 3</Text>
        </View>
        <View>
          <Text style={{ margin: 20 }}>
            Select method to secure and recover your account. This will be used
            to verify important activity, refer your account and access your
            account from other devices.
          </Text>
        </View>

        <Text
          style={{
            marginTop: 20,
            fontSize: 16,
            marginLeft: 20,
            fontWeight: "bold",
            color: "#000",
          }}
        >
          Most Convenient
        </Text>

        <View
          style={{
            width: wp("90%"),
            height: 100,
            borderWidth: 2,
            marginLeft: "5%",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 10,
            borderColor: "#c4c4c4",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: 10, width: "79%" }}>
              <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16 }}>
                Email
              </Text>
              <Text style={{ marginTop: 5 }}>
                Receive a verification code after account recovery link via
                email.
              </Text>
            </View>
            <MaterialCommunityIcons
              name={"email"}
              color={"#D5D4D8"}
              size={35}
              style={{ marginTop: 10 }}
            />
          </View>
        </View>

        <View
          style={{
            width: wp("90%"),
            height: 100,
            borderWidth: 2,
            marginLeft: "5%",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 10,
            borderColor: "#c4c4c4",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: 10, width: "79%" }}>
              <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16 }}>
                Phone
              </Text>
              <Text style={{ marginTop: 5 }}>
                Receive a verification code and account recovery link via Phone
                SMS.
              </Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              marginTop: 20,
              fontSize: 16,
              marginLeft: 20,
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Most Secure (Recommended)
          </Text>
        </View>

        <View
          style={{
            width: wp("90%"),
            height: 100,
            borderWidth: 2,
            marginLeft: "5%",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 10,
            borderColor: "#c4c4c4",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: 10, width: "79%" }}>
              <Text
                style={{ color: "#0072CE", fontWeight: "bold", fontSize: 16 }}
              >
                Secure Passphrase
              </Text>
              <Text style={{ marginTop: 5 }}>
                Generate and safely store a unique passphrase.
              </Text>
            </View>

            <Feather
              name={"file-text"}
              color={"#0072CE"}
              size={45}
              style={{ marginTop: 10 }}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("Home")}
          style={{
            height: hp("8%"),
            width: wp("92%"),
            backgroundColor: "#0072CE",
            borderRadius: 10,
            alignSelf: "center",
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Continue
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecureAccount;
