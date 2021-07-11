import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";

function Weather({ temp, weather }) {
  console.log(weather);
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
