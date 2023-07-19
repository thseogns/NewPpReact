/** @format */

import React from "react";
import BasicButton from "./BasicButton";

interface WeatherButtonProps {
  cities: string[];
  setCity: (city: string) => void;
  selectedCity: string;
}

const WeatherButton = ({
  cities,
  setCity,
  selectedCity,
}: WeatherButtonProps) => {
  return (
    <div className="button-box">
      <BasicButton onClick={() => setCity("")}>Current Location</BasicButton>
      {cities.map((city, index) => (
        <BasicButton key={index} onClick={() => setCity(city)}>
          {city}
        </BasicButton>
      ))}
    </div>
  );
};

export default WeatherButton;
