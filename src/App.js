import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      currentCity: '',
      dataEntered: false
    }
  }

  handleCityNameInput = (e) => {
    this.setState({
      currentCity: e.target.value
    })
  }

  callCityData = async (e) => {
    e.preventDefault();
    let currentCityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.currentCity}&format=json`);
    console.log(currentCityData);
    this.setState({
      cityData: currentCityData,
      dataEntered: true
    })
  }

  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <form onSubmit={this.callCityData}>
          <label>Pick a city:
            <input type="text" onInput={this.handleCityNameInput} />
            <button type="submit">Explore!</button>
          </label>
        </form>
        {this.state.dataEntered
        ?
        <Card>
          <Card.Body>
            <Card.Title>{this.state.cityData.data[0].display_name}</Card.Title>
            <Card.Text>Latitude: {this.state.cityData.data[0].lat}</Card.Text>
            <Card.Text>Longitude: {this.state.cityData.data[0].lon}</Card.Text>
          </Card.Body>
        </Card>
        :
        <></>
        }
      </>
    );
  }
}
export default App;
