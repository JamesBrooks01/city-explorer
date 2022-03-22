import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
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
      dataEntered: false,
      error: false,
      errorMessage: ''
    }
  }

  handleCityNameInput = (e) => {
    this.setState({
      currentCity: e.target.value
    })
  }

  callCityData = async (e) => {
    e.preventDefault();
    try {
      let currentCityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.currentCity}&format=json`);
      this.setState({
        cityData: currentCityData,
        latitude: currentCityData.data[0].lat,
        longitude: currentCityData.data[0].lon,
        imgURL: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${currentCityData.data[0].lat},${currentCityData.data[0].lon}&zoom=12`,
        dataEntered: true
      })
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `An Error has Occurred: ${error.response.status}`
      })
    }
  }

  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <form onSubmit={this.callCityData}>
          <label>Type a City Name:</label>
          <input type="text" onInput={this.handleCityNameInput} />
          <button type="submit">Explore!</button>
        </form>
        {this.state.error
          ?
          <Alert id='error-message'>{this.state.errorMessage}</Alert>
          :
              this.state.dataEntered
                ?
                <Card>
                  <Card.Body>
                    <Card.Title>{this.state.cityData.data[0].display_name}</Card.Title>
                    <Card.Text>Latitude: {this.state.latitude}</Card.Text>
                    <Card.Text>Longitude: {this.state.longitude}</Card.Text>
                    <Card.Img src={this.state.imgURL} />
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
