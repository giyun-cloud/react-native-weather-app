import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.thirdBox}></View>
      <View style={styles.secondBox}></View>
      <View style={styles.firstBox}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2ecc71",
    justifyContent: "center",
  },
  text: {
    color: "#8e44ad",
  },
  firstBox: {
    flex: 1,
    backgroundColor: "#2c3e50",
  },
  secondBox: {
    flex: 1,
    backgroundColor: "#95a5a6",
  },
  thirdBox: {
    flex: 1,
    backgroundColor: "#7f8c8d",
  },
});
