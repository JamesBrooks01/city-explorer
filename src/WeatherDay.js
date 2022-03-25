import React from 'react';
import Card from 'react-bootstrap/Card';

class WeatherDay extends React.Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Weather in: {this.props.cityName} on: {this.props.date}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default WeatherDay