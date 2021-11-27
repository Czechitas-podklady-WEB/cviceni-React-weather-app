import React from "react";
import "./style.css";
import { getDayfromUnix } from "../../utils/functions";

const CurrentForecast = (props) => {
  let propsTemp = props.data.main.temp;
  const countTemp = propsTemp - 273.15;
  console.log(countTemp);
  return (
    <div className="forecast">
      <div className="forecast__day">
        {props.data && getDayfromUnix(props.data.dt)}
      </div>
      <div className="forecast__icon">
        {
          <img
            src={`http://openweathermap.org/img/wn/${
              props.data && props.data.weather[0].icon
            }@2x.png`}
            style={{ height: "100%" }}
            alt="current weather icon"
          />
        }
      </div>
      <div className="forecast__temp">
        {props.data && Math.round(countTemp)}°C
      </div>
    </div>
  );
};

export default CurrentForecast;
