import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

export default ({ handlePlay }) => {
  return (
    <TouchableOpacity onPress={() => handlePlay()} style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={require("../../../assets/icons/play_arrow.png")} style={styles.playIcon} />
      <Text style={styles.play}>PLAY!</Text>
    </TouchableOpacity>
  );
};
