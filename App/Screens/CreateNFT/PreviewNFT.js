import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../../Components/ResponsiveLayout";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const PreviewNFT = (props) => {
  const [text, setText] = React.useState("");
  const [text1, setText1] = React.useState("");
  const [size, setSize] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    { label: "Digital Arts", value: "Digital Art" },
    { label: "Banana", value: "banana" },
  ]);

  const onChangeText = (text) => {
    setText(text);
  };
  const onChangeText1 = (text) => {
    setText1(text);
  };
  const onChangeSize = (text) => {
    setSize(text);
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
              marginTop: 80,
              flexDirection: "row",
              backgroundColor: "#eee",
              height: 80,
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}
          >
            <TouchableOpacity
              style={{ marginLeft: 2 }}
              onPress={() => props.navigation.goBack()}
            >
              <Ionicons name={"chevron-back"} size={28} color={"#000"} />
            </TouchableOpacity>
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
                Preview NFT
              </Text>
            </View>

            <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
              <AntDesign name={"close"} size={25} color={"#000"} />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View
          style={{
            width: wp("100%"),
            height: 2,
            backgroundColor: "#c4c4c4",
            marginTop: 10,
          }}
        ></View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ alignSelf: "center" }}>STEP 2 OF 2</Text>
        </View>

        <View
          style={{
            width: wp("90%"),
            height: 480,
            borderWidth: 2,
            marginLeft: "5%",
            borderRadius: 10,
            marginTop: 30,
            borderColor: "#c4c4c4",
          }}
        >
          <Image
            style={{
              width: "90%",
              height: "45%",
              borderRadius: 8,
              marginTop: "5%",
              alignSelf: "center",
            }}
            source={{
              uri: "https://cdn.shopify.com/s/files/1/1414/2472/articles/46_1024x631.png?v=1593590858",
            }}
          />
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              marginLeft: 20,
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Art O Kaoghaire
          </Text>
          <Text style={{ marginTop: 5, fontSize: 18, marginLeft: 20 }}>
            Digital Art
          </Text>
          <Text style={{ marginTop: 14, fontSize: 17, marginLeft: 20 }}>
            Having returned home to the hot-tempered Art became involved in a
            feud with a protestant landowner and magistrate.
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                marginTop: 5,
                fontSize: 17,
                marginLeft: 20,
                color: "#0D6AF9",
              }}
            >
              Read More
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("Home")}
          style={{
            height: hp("8%"),
            width: wp("95%"),
            backgroundColor: "#39C0BA",
            borderRadius: 10,
            alignSelf: "center",
            marginTop: 18,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Mint NFT{" "}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PreviewNFT;
