import { Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../../Components/ResponsiveLayout";
const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mainContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    height: hp("50%"),
  },
  imageView: {
    width: wp("100%"),
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  lineStyle: {
    width: wp("100%"),
    height: 2,
    backgroundColor: "#eee",
    marginTop: 10,
  },
  root: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
  },
  codeFieldRoot: {
    top: 20,
    width: "60%",
    alignSelf: "center",
  },
  cell: {
    borderRadius: 5,
    width: 45,
    height: 45,
    lineHeight: 38,
    fontSize: 24,
    // borderWidth: 1,
    borderColor: "#D6D6D6",
    textAlign: "center",
    marginLeft: 5,
    backgroundColor: "#eee",
  },
  focusCell: {
    borderColor: "#000",
  },
  verifyButton: {
    height: hp("8%"),
    width: wp("85%"),
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
    alignSelf: "center",
    top: 90,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButton: {
    justifyContent: "center",
    alignItems: "center",
    height: hp("10%"),
    top: 90,
  },
  line2: {
    width: wp("80%"),
    height: 2,
    backgroundColor: "#eee",
    marginTop: 80,
    alignSelf: "center",
  },
  notReceiveView: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  notReceiveText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginTop: 30,
  },
  differentMailText: {
    color: "#79e0d8",
    fontSize: 20,
    marginTop: 15,
  },
  resendCodeText: {
    color: "#79e0d8",
    fontSize: 20,
    marginTop: 15,
  },
};

export default styles;
