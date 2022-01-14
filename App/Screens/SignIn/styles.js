import { Platform, Dimensions } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../../Components/ResponsiveLayout";
var windowSize = Dimensions.get("window");
const styles = {
  container11: {
    flex: 1,
    backgroundColor: "#000",
    height: hp("100%"),
  },
  selectionButtons: {
    height: hp("7%"),
    width: wp("95%"),
    backgroundColor: "#282b30",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
  },
  enterTextView: {
    height: hp("9%"),
    width: wp("95%"),
    backgroundColor: "#fff",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  arrowButton: {
    width: "15%",
    height: "83%",
    backgroundColor: "#79e0d8",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  alreadyAccountText: {
    color: "#fff",
    alignSelf: "center",
    marginTop: 30,
  },
  loginButton: {
    height: hp("8%"),
    width: wp("95%"),
    backgroundColor: "#2E4C3C",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  loginText: {
    color: "#79e0d8",
    fontSize: 18,
    fontWeight: "bold",
  },
};

export default styles;
