import React from "react";
import WeatherDay from './WeatherDay.js'

class Weather extends React.Component {
  render() {
    let weather = this.props.weatherArray.map((date, i) => (
      <WeatherDay
        cityName={this.props.currentCity}
        date={date.date}
        description={date.description}
        key={i}
        number={i + 1}
      />
    ))
    return (
      [weather]
    )
  }
}

export default Weather
