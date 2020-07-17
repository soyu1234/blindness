import React from "react";
import { View } from "react-native";
import { Header } from "../../components";
import styles from "./styles";
import Action from "../../state";
import { Store } from "../../state/Provider";
import { useSelector } from "react-redux";

export default ({ navigation }) => {
  const time = useSelector((state) => state.default.time);
  React.useEffect(() => {
    Store.dispatch(Action.update("point", 0));
    Store.dispatch(Action.update("time", 15));
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
  return (
    <View style={styles.container}>
      {/* <Header /> */}
    </View>
  );
};
