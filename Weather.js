import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    icons: "weather-lightning",
    gradient: ["#FFE000", "#799F0C"],
  },
  Drizzle: {
    icons: "weather-rainy",
    gradient: ["#2980B9", "#6DD5FA", "#FFFFFF"],
  },
  Rain: {
    icons: "weather-rainy",
    gradient: ["#00d2ff", "#3a7bd5"],
  },
  Snow: {
    icons: "weather-snowy",
    gradient: ["#E6DADA", "#274046"],
  },
  Mist: {
    icons: "grain",
    gradient: ["#36D1DC", "#5B86E5"],
  },
  Smoke: {
    icons: "weather-cloudy-alert",
    gradient: ["#636363", "#a2ab58"],
  },
  Haze: {
    icons: "weather-fog",
    gradient: ["#36D1DC", "#5B86E5"],
  },
  Dust: {
    icons: "weather-cloudy-alert",
    gradient: ["#636363", "#a2ab58"],
  },
  Fog: {
    icons: "weather-fog",
    gradient: ["#36D1DC", "#5B86E5"],
  },
  Sand: {
    icons: "weather-cloudy-alert",
    gradient: ["#636363", "#a2ab58"],
  },
  Ash: {
    icons: "weather-fog",
    gradient: ["#636363", "#a2ab58"],
  },
  Squall: {
    icons: "weather-windy",
    gradient: ["#1f4037", "#99f2c8"],
  },
  Tornado: {
    icons: "weather-tornado",
    gradient: ["#44A08D", "#093637"],
  },
  Clear: {
    icons: "weather-sunny",
    gradient: ["#43C6AC", "#F8FFAE"],
  },
  Clouds: {
    icons: "weather-cloudy",
    gradient: ["#B2FEFA", "#0ED2F7"],
  },
};

function Weather({ temp, weather }) {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={weatherOptions[weather].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[weather].icons}
          color="#fff"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
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
    color: "#fff",
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
