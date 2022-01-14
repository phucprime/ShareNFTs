import React from "react";
import {
  Image,
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

const ClaimNFT = (props) => {
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
              Claim NFT
            </Text>
          </View>

          <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
            <AntDesign name={"close"} size={25} color={"#000"} />
          </TouchableOpacity>
        </View>
        <Image
          style={{
            width: "90%",
            height: "25%",
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
          Abstract Art #4657
        </Text>
        <Text style={{ marginTop: 5, fontSize: 18, marginLeft: 20 }}>
          Digital Art
        </Text>
        <TouchableOpacity
          onPress={() => alert("Claim NFT Successful!!")}
          style={{
            height: hp("8%"),
            width: wp("95%"),
            backgroundColor: "#000000",
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
            Claim NFT{" "}
          </Text>
        </TouchableOpacity>

        <ScrollView style={{ marginBottom: 130 }}>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              marginLeft: 20,
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Description
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ClaimNFT;
