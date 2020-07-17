import React from "react";
import { View, Image, Text } from "react-native";
import { useSelector } from "react-redux";
import styles from "./styles";

export default () => {
  const score = useSelector((state) => state.default.highScore);
  console.log(score);
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={require("../../../assets/icons/trophy.png")} style={styles.trophyIcon} />
      <Text style={styles.highscore}>Hi-score: {score}</Text>
    </View>
  );
};
