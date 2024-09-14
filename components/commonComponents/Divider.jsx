import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Divider({ name, color, fontSize, fontFamily }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        marginHorizontal: "auto",
      }}
    >
      <View style={[styles.line, { backgroundColor: color }]} />
      <Text
        style={[
          styles.txt,
          { color: color, fontSize: fontSize, fontFamily: fontFamily },
        ]}
      >
        {name}
      </Text>
      <View style={[styles.line, { backgroundColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    flex: 1,
    height: 1.5,
  },
  txt: {
    margin: 5,
  },
});
