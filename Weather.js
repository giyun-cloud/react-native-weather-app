import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Weather({ temp, weather }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons size={96} name="weather-rainy" />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weather: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]),
};
export default Weather;
