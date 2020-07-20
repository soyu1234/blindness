import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const Header = ({ fontSize }) => {
  const { header, container } = styles;
  return (
    <View style={container}>
      <Text style={[header, { color: "#E64C3C", fontSize }]}>c</Text>
      <Text style={[header, { color: "#E57E31", fontSize }]}>o</Text>
      <Text style={[header, { color: "#F1C431", fontSize }]}>l</Text>
      <Text style={[header, { color: "#68CC73", fontSize }]}>o</Text>
      <Text style={[header, { color: "#3998DB", fontSize }]}>r</Text>
      <Text style={[header, { fontSize }]}>blinder</Text>
    </View>
  );
};

export default Header;

Header.propTypes = {
  fontSize: PropTypes.number,
};

Header.defaultProps = {
  fontSize: 55,
};
