import React from "react";
import WeatherIcons from "react-weathericons";
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from "./../../../constans/weathers";
import PropTypes from "prop-types";
import "./styles.css";

const icons = {
  [CLOUD]: "cloud",
  [CLOUDY]: "cloudy",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: " snow",
  [WINDY]: "windy"
};

const getWeatherIcons = weatherState => {
  const icon = icons[weatherState];

  const sizeIcon = "4x";

  if (icon) {
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
  } else {
    return (
      <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />
    );
  }
};

function WeatherTemperature({ temperature, weatherState }) {
  return (
    <div className="weatherTemperatureCont">
      {getWeatherIcons(weatherState)}

      <span className="temperature">{`${temperature}`}</span>
      <span className="temperatureType">{` C°`}</span>
    </div>
  );
}

WeatherTemperature.protoTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
