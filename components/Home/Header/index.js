import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default () => {
  const { header, container } = styles;
  return (
    <View style={container}>
      <Text style={[header, { color: "#E64C3C" }]}>c</Text>
      <Text style={[header, { color: "#E57E31" }]}>o</Text>
      <Text style={[header, { color: "#F1C431" }]}>l</Text>
      <Text style={[header, { color: "#68CC73" }]}>o</Text>
      <Text style={[header, { color: "#3998DB" }]}>r</Text>
      <Text style={header}>blinder</Text>
    </View>
  );
};
