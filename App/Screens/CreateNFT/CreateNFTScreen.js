import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../../Components/ResponsiveLayout";
import AntDesign from "react-native-vector-icons/AntDesign";
import DropDownPicker from "react-native-dropdown-picker";

const CreateNFTScreen = (props) => {
  const [text, setText] = React.useState("");
  const [text1, setText1] = React.useState("");
  const [size, setSize] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    { label: "Digital Arts", value: "Digital Art" },
    { label: "Music", value: "Music" },
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
            <View
              style={{
                width: wp("83%"),
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
                Create an NFT
              </Text>
            </View>

            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <AntDesign name={"close"} size={25} />
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
          <Text style={{ alignSelf: "center" }}>STEP 1 OF 2</Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#000",
              margin: 15,
            }}
          >
            Upload Files
          </Text>
        </View>

        <View
          style={{
            width: wp("90%"),
            height: 200,
            borderWidth: 1,
            marginLeft: "5%",
            justifyContent: "center",
            alignItems: "center",
            borderStyle: "dashed",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            style={{
              width: wp("35%"),
              height: 50,
              borderWidth: 1,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold" }}>
              Choose File
            </Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 10 }}>
            PNG, GIF, WEBP, MP4 or MP3, Max 100mb.
          </Text>
        </View>

        <Text style={{ marginTop: 19, fontSize: 20, marginLeft: 20 }}>
          TITLE
        </Text>

        <View
          style={{
            width: wp("90%"),
            height: 65,
            borderWidth: 2,
            marginLeft: "5%",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <TextInput
            style={{ fontSize: 16 }}
            onChangeText={onChangeText}
            value={text}
            placeholder={"EX. Redeemable Art"}
          />
        </View>

        <Text style={{ marginTop: 20, fontSize: 19, marginLeft: 20 }}>
          DESCRIPTION
        </Text>

        <View
          style={{
            width: wp("90%"),
            height: 130,
            marginLeft: "5%",
            borderRadius: 10,
            marginTop: 10,
            backgroundColor: "#fff",
          }}
        >
          <TextInput
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#000",
              marginLeft: 10,
            }}
            onChangeText={onChangeText1}
            value={text1}
            placeholder={"EX. Redeemable Art"}
          />
        </View>

        <Text style={{ marginTop: 20, fontSize: 19, marginLeft: 20 }}>
          PROPERTIES
        </Text>

        <View
          style={{
            width: wp("90%"),
            height: 50,
            marginLeft: "5%",
            borderRadius: 10,
            marginTop: 10,
            backgroundColor: "#fff",
          }}
        >
          <TextInput
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#000",
              marginLeft: 10,
            }}
            onChangeText={onChangeSize}
            value={size}
            placeholder={"EX. Size"}
          />
        </View>

        <TouchableOpacity>
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              marginLeft: 16,
              color: "#0D6AF9",
            }}
          >
            + Add More
          </Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 20, fontSize: 19, marginLeft: 20 }}>
          CATEGORY
        </Text>

        <View
          style={{
            width: wp("90%"),
            height: 50,
            marginLeft: "5%",
            borderRadius: 10,
            marginTop: 10,
            backgroundColor: "#fff",
          }}
        >
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("PreviewNFT")}
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
            height: "5%",
            width: "28%",
            borderRadius: 10,
            alignSelf: "flex-end",
            marginTop: 20,
            right: 20,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>Next</Text>
        </TouchableOpacity>

        <View
          style={{
            width: wp("100%"),
            height: 3,
            backgroundColor: "#c4c4c4",
            marginTop: 40,
          }}
        ></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateNFTScreen;
