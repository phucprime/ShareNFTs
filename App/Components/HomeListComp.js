import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "./ResponsiveLayout";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const renderItem = ({ item }) => (
  <View>
    <View
      style={{
        width: wp("90%"),
        marginLeft: "5%",
        height: hp("15%"),
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 10,
      }}
      elevation={10}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: "28%", height: "90%", justifyContent: "center" }}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
              marginLeft: 9,
              marginTop: 9,
            }}
            source={{
              uri: item.imgUrl,
            }}
          />
        </View>

        <View style={{ marginLeft: 30 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000" }}>
            {item.name}
          </Text>
          <Text style={{ marginTop: 5, color: "#79e0d8" }}>{item.title}</Text>
          <Text style={{ marginTop: 5 }}>{item.time}</Text>
        </View>
      </View>
    </View>
  </View>
);

const HomeListComp = ({ props, data }) => {
  const [nftQuantityShow, setNftQuantityShow] = useState(true);
  useEffect(() => {
    let timer;
    if (nftQuantityShow) {
      timer = setTimeout(() => {
        setNftQuantityShow(false);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <SafeAreaView>
      {nftQuantityShow && (
        <View
          style={{
            height: 20,
            backgroundColor: "#DEDEDE",
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            alignSelf: "center",
          }}
        >
          <Text style={{ fontSize: 13 }}>
            {` loading... ${data.length} NFT(s) found `}
          </Text>
        </View>
      )}

      <View style={{ marginTop: 10, height: hp("48%") }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={{ marginTop: 0 }}>
        <View
          style={{
            marginTop: 5,
            width: wp("90%"),
            marginLeft: "5%",
            height: hp("12%"),
            backgroundColor: "#fff",
            borderRadius: 15,
            borderWidth: 2,
            borderColor: "#e7e7e7",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("createNFT")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#0072CE",
              height: "70%",
              width: "45%",
              borderRadius: 10,
              flexDirection: "row",
            }}
          >
            <AntDesign name={"plus"} size={24} color={"#fff"} />
            <Text style={{ color: "#fff", fontSize: 20 }}> Create NFT</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("SendNFT")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#39C0BA",
              height: "70%",
              width: "45%",
              borderRadius: 10,
              flexDirection: "row",
              marginLeft: 10,
            }}
          >
            <FontAwesome name={"send"} size={24} color={"#fff"} />
            <Text style={{ color: "#fff", fontSize: 20 }}> Send NFT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeListComp;
