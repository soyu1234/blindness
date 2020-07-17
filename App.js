import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StatusBar, AsyncStorage, View } from "react-native";

import * as Font from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";

import { Provider, Store } from "./state/Provider";
import Action from "./state";

import Home from "./screens/Home";
import Game from "./screens/Game";

import Routes from "./screens/Routes";

const App = () => {
  const Stack = createStackNavigator();
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  useEffect(() => {
    const setScore = async () => {
      const result = await AsyncStorage.getItem("highScore");
      const score = result ? parseInt(result) : 0;
      Store.dispatch(Action.update("highScore", score));
    };
    setScore();
    Store.dispatch(Action.update("sound", true));
    Font.loadAsync({ dogbyte: require("./assets/fonts/dogbyte.otf") }).then(() => setIsFontLoaded(true));
  }, []);
  return isFontLoaded ? (
    <Provider>
      <StatusBar barStyle="light-content" />
      <Routes>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Game" component={Game} options={{ gestureEnabled: false }} />
      </Routes>
    </Provider>
  ) : (
    <AppLoading />
  );
};

export default App;
