import React from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import { Header, Grid } from "../../components";
import styles from "./styles";
import Action from "../../state";
import { Store } from "../../state/Provider";
import { useSelector } from "react-redux";
import { generateRGB, mutateRGB } from "../../utils";

export default ({ navigation }) => {
  const time = useSelector((state) => state.default.time);
  const rgb = useSelector((state) => state.default.color);
  // const points = useSelector((state) => state.default.point);

  const generateSizeIndex = (size) => {
    return Math.floor(Math.random() * size);
  };

  const generateNewRound = (points) => {
    const RGB = generateRGB();
    const mRGB = mutateRGB(RGB);
    const size = Math.min(Math.max(Math.floor(Math.sqrt(points)), 2), 5);
    Store.dispatch(Action.update("size", size));
    Store.dispatch(Action.update("diffTileIndex", [generateSizeIndex(size), size - 1]));
    Store.dispatch(Action.update("diffTileColor", `rgb(${mRGB.r}, ${mRGB.g}, ${mRGB.b})`));
    Store.dispatch(Action.update("color", RGB));
  };

  React.useEffect(() => {
    Store.dispatch(Action.update("point", 0));
    Store.dispatch(Action.update("time", 15));
    generateNewRound(0);
    return () => Store.dispatch(Action.clear());
  }, []);

  React.useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        Store.dispatch(Action.update("time", time - 1));
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [time]);

  if (!rgb) return <></>;

  return (
    <View style={styles.container}>
      <Header fontSize={28} />
      <Grid />
    </View>
  );
};
