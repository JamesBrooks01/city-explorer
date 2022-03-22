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
      latitude: 0,
      longitude: 0,
      imgURL: '',
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
    this.setState({
      cityData: currentCityData,
      latitude: currentCityData.data[0].lat,
      longitude: currentCityData.data[0].lon,
      imgURL: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${currentCityData.data[0].lat},${currentCityData.data[0].lon}&zoom=12`,
      dataEntered: true
    })
  }

  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <form onSubmit={this.callCityData}>
          <label>Pick a city:</label>
            <input type="text" onInput={this.handleCityNameInput} />
            <button type="submit">Explore!</button>
        </form>
        {this.state.dataEntered
        ?
        <Card>
          <Card.Body>
            <Card.Title>{this.state.cityData.data[0].display_name}</Card.Title>
            <Card.Text>Latitude: {this.state.latitude}</Card.Text>
            <Card.Text>Longitude: {this.state.longitude}</Card.Text>
            <Card.Img src={this.state.imgURL}/>
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
