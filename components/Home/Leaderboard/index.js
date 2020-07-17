import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

export default () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={require("../../../assets/icons/leaderboard.png")} style={styles.trophyIcon} />
      <Text style={styles.highscore}>Leaderboard</Text>
    </View>
  );
};
