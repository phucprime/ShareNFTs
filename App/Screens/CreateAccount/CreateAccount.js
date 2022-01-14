import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../../Components/ResponsiveLayout";
import Octicons from "react-native-vector-icons/Octicons";
import { userDetailService } from "../../Store/Actions/UserInfo";
import { useDispatch } from "react-redux";

const CreateAccount = (props) => {
  const [text, setText] = React.useState("");
  const [name, setName] = React.useState("");
  const dispatch = useDispatch();

  const onChangeText = (text) => {
    setText(text);
  };
  const onChangeName = (text) => {
    setName(text);
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
              Create an account
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
          <Text style={{ alignSelf: "center" }}>STEP 1 OF 3</Text>
        </View>
        <View>
          <Text style={{ margin: 20 }}>
            Enter an Account ID to use with your account. Your Account ID will
            be used for all operations, including sending and receiving assets.
          </Text>
        </View>
        <Text style={{ marginTop: 20, fontSize: 16, marginLeft: 20 }}>
          FULL NAME
        </Text>
        <View
          style={{
            width: wp("90%"),
            height: 55,
            borderWidth: 2,
            marginLeft: "5%",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <TextInput
            style={{ fontSize: 16, marginLeft: 10 }}
            onChangeText={onChangeName}
            value={name}
            placeholder={"Ex John Doe"}
          />
        </View>

        <Text style={{ marginTop: 20, fontSize: 16, marginLeft: 20 }}>
          ACCOUNT ID
        </Text>

        <View
          style={{
            width: wp("90%"),
            height: 55,
            borderWidth: 2,
            marginLeft: "5%",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <TextInput
            style={{ fontSize: 16, marginLeft: 10 }}
            onChangeText={onChangeText}
            value={text}
            // placeholder={'yourname'}
            placeholder={props.route.params.loginData}
          />
        </View>

        <View>
          <Text style={{ margin: 20 }}>
            Your account ID can contain any of the following:
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Octicons
            name={"primitive-dot"}
            size={20}
            style={{ marginLeft: 20 }}
          />
          <Text style={{ marginLeft: 10 }}>Lowercase characters (a-z)</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Octicons
            name={"primitive-dot"}
            size={20}
            style={{ marginLeft: 20 }}
          />
          <Text style={{ marginLeft: 10 }}>Digits (0-9)</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Octicons
            name={"primitive-dot"}
            size={20}
            style={{ marginLeft: 20 }}
          />
          <Text style={{ marginLeft: 10 }}>
            Characters (_) can be used as separator
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Text style={{ marginLeft: 20 }}>
            Your account ID CANNOT contain:
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Octicons
            name={"primitive-dot"}
            size={20}
            style={{ marginLeft: 20 }}
          />
          <Text style={{ marginLeft: 10 }}>Characters "@" or "."</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Octicons
            name={"primitive-dot"}
            size={20}
            style={{ marginLeft: 20 }}
          />
          <Text style={{ marginLeft: 10 }}>Fewer than 2 characters</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Octicons
            name={"primitive-dot"}
            size={20}
            style={{ marginLeft: 20 }}
          />
          <Text style={{ marginLeft: 10 }}>
            More than 64 characters (including .domain)
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            let action2;
            action2 = userDetailService();
            dispatch(action2);
            props.navigation.navigate("SecureAccount");
          }}
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
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Create
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>By creating an account, you agree to the</Text>
        </View>
        <View
          style={{
            marginTop: 5,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text>Wallet</Text>
          <TouchableOpacity>
            <Text style={{ color: "#0072CE" }}> Terms of Service</Text>
          </TouchableOpacity>
          <Text> and</Text>
          <TouchableOpacity>
            <Text style={{ color: "#0072CE" }}> Privacy Policy.</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: wp("100%"),
            height: 2,
            backgroundColor: "#c4c4c4",
            marginTop: 40,
          }}
        ></View>

        <View
          style={{
            marginTop: 40,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: 30,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Signin")}>
            <Text style={{ color: "#0072CE", fontSize: 16 }}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccount;
