import React, { useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp } from "../../Components/ResponsiveLayout";
import AntDesign from "react-native-vector-icons/AntDesign";

const Settings = (props) => {
  const [size, setSize] = React.useState("");

  useEffect(() => {});

  return (
    <SafeAreaView>
      <View style={{ marginTop: 60, height: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <View
            style={{
              width: wp("75%"),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: "#000",
                alignSelf: "center",
              }}
            >
              Settings
            </Text>
          </View>

          <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
            <AntDesign name={"close"} size={25} color={"#000"} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
