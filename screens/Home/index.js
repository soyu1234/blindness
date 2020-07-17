import React from "react";
import { Header, Play, HighScore, Leaderboard, Copyright } from "../../components";
import { View } from "react-native";
import styles from "./styles";
// import { useSelector } from "react-redux";
import Action from "../../state";
import { Store } from "../../state/Provider";

export default ({navigation}) => {
  const { container } = styles;
  const handlePlay = () => {
    navigation.navigate("Game");
  };
  const handleSound = (sound) => {
    Store.dispatch(Action.update("sound", !sound));
  };
  return (
    <View style={container}>
      {/* <Header /> */}
      {/* <Play handlePlay={handlePlay} /> */}
      {/* <HighScore /> */}
      {/* <Leaderboard/> */}
      <Copyright handleSound={handleSound} />
    </View>
  );
};
