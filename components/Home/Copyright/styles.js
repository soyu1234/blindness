import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bottomContainer: {
    position: "absolute",
    flexDirection: "row",
    left: 15,
    right: 15,
    bottom: 12.5, // the 2.5px bottom margin from the text is subtracted from the 15px spacing
  },
  copyrightText: {
    fontSize: 16,
    fontFamily: "dogbyte",
    marginBottom: 2.5,
  },
  soundIcon: {
    height: 35,
    width: 35
  },
});
