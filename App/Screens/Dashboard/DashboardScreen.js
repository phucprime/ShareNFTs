import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../../Components/ResponsiveLayout";
import styles from "./styles";
import HomeListComp from "../../Components/HomeListComp";
import { listMyNFTs, listSent, listReceived } from "./constant";

const DashboardScreen = (props) => {
  const tabItems = [
    { id: 0, title: "My NFTs" },
    { id: 1, title: "Sent" },
    { id: 2, title: "Received" },
  ];
  const [activeButtonName, setActiveButtonName] = useState(tabItems[0].title);

  const TabComp = ({ title }) => {
    return (
      <TouchableOpacity
        onPress={() => setActiveButtonName(title)}
        style={{
          height: "80%",
          width: "32%",
          marginRight: "1%",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: activeButtonName === title ? "#fff" : "transparent",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: activeButtonName === title ? "#000" : "#fff",
            fontSize: 16,
            fontWeight: activeButtonName === title ? "bold" : "normal",
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={{ backgroundColor: "#202424", height: hp("30%") }}>
        <View
          style={{
            width: wp("80%"),
            justifyContent: "center",
            marginTop: hp("8%"),
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              width: wp("50%"),
              height: hp("5%"),
            }}
            source={require("../../Assets/logo1.png")}
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Settings")}
            style={{
              height: 40,
              width: 113,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              left: 60,
              flexDirection: "row",
            }}
          >
            <Image
              style={{
                width: 27,
                height: 27,
              }}
              source={require("../../Assets/profile.png")}
            />
            <Text style={{ fontSize: 14, color: "#fff" }}>{` username`}</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: hp("8%"),
            width: wp("95%"),
            backgroundColor: "rgba(255, 255, 255, 0.21)",
            borderRadius: 10,
            alignSelf: "center",
            marginTop: 30,
            flexDirection: "row",
          }}
        >
          {tabItems.map((item) => (
            <TabComp title={item.title} key={item.id} />
          ))}
        </View>
      </View>

      <View style={{ height: hp("90%"), backgroundColor: "#ededed" }}>
        {activeButtonName === "My NFTs" && (
          <HomeListComp props={props} data={listMyNFTs} />
        )}
        {activeButtonName === "Sent" && (
          <HomeListComp props={props} data={listSent} />
        )}
        {activeButtonName === "Received" && (
          <HomeListComp props={props} data={listReceived} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
