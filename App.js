import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "978a4cff91d86e738eebb82863500e06";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (lat, lon) => {
    const weather = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    );
    return weather;
  };

  getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        throw Error();
        return;
      }
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      const {
        data: {
          main: { temp },
          weather,
        },
      } = await this.getWeather(latitude, longitude);
      this.setState({
        isLoading: false,
        temp,
        weather: weather[0].main,
      });
    } catch (error) {
      Alert.alert("Can't find your location.", "I'm sorry");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, weather } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp * 10) / 10} weather={weather} />
    );
  }
}
