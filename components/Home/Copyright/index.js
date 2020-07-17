import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";
import styles from "./styles";
export default ({ handleSound }) => {
  const sound = useSelector((state) => state.default.sound);
  const imageSource = sound ? require("../../../assets/icons/speaker-on.png") : require("../../../assets/icons/speaker-off.png");
  return (
    <View style={styles.bottomContainer}>
      <View>
        <Text style={[styles.copyrightText, { color: "#E64C3C" }]}>Music: Komiku</Text>
        <Text style={[styles.copyrightText, { color: "#F1C431" }]}>SFX: SubspaceAudio</Text>
        <Text style={[styles.copyrightText, { color: "#3998DB" }]}>Development: RisingStack</Text>
      </View>
      <View style={{ flex: 1 }} />
      <TouchableOpacity onPress={() => handleSound(sound)}>
        <Image source={imageSource} style={styles.soundIcon} />
      </TouchableOpacity>
    </View>
  );
};
