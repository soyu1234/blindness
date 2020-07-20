import React from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import styles from "./styles";

export default () => {
  const { width } = Dimensions.get(`window`);
  const rgb = useSelector((state) => state.default.color);
  const size = useSelector((state) => state.default.size);
  const diffTileIndex = useSelector((state) => state.default.diffTileIndex);
  const diffTileColor = useSelector((state) => state.default.diffTileColor);
  if (!rgb) return null;
  return (
    <View style={{ height: width * 0.875, width: width * 0.875, flexDirection: "row" }}>
      {Array(size)
        .fill()
        .map((val, columnIndex) => (
          <View style={{ flex: 1, flexDirection: "column" }} key={columnIndex}>
            {Array(size)
              .fill()
              .map((val, rowIndex) => (
                <TouchableOpacity
                  key={`${rowIndex}.${columnIndex}`}
                  style={{
                    flex: 1,
                    backgroundColor: rowIndex == diffTileIndex[0] && columnIndex == diffTileIndex[1] ? diffTileColor : `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
                    margin: 2,
                  }}
                  onPress={() => console.log(rowIndex, columnIndex)}
                />
              ))}
          </View>
        ))}
    </View>
  );
};
