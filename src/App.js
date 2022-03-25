import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import './App.css';
import Weather from './Weather.js';
import Movie from './Movie';
import Container from 'react-bootstrap/esm/Container';
const serverURL = process.env.REACT_APP_SERVER;
// const locationIQAPI = process.env.REACT_APP_LOCATIONIQ_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      currentCity: '',
      latitude: 0,
      longitude: 0,
      imgURL: '',
      weatherArray: [],
      movieArray: [],
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

  callMapData = async () => {
    try {
      let currentCityData = await axios.get(`${serverURL}/location?cityName=${this.state.currentCity}`);
      this.setState({
        cityData: currentCityData.data,
        latitude: currentCityData.data.lat,
        longitude: currentCityData.data.lon,
        imgURL: currentCityData.data.imgURL,
      })
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `An Error has Occurred: ${error.response.status}`
      })
    }
  }

  callWeatherData = async () => {
    try {
      let weatherData = await axios.get(`${serverURL}/weather?lat=${this.state.cityData.lat}&lon=${this.state.cityData.lon}`)
      this.setState({
        weatherArray: weatherData.data,
      })
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `An Error has Occurred: ${error.response.status}`
      })
    }
  }

  callMovieData = async () => {
    try {
      let movieData = await axios.get(`${serverURL}/movies?keyword=${this.state.currentCity}`)
      this.setState({
        movieArray: movieData.data
      })
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `An Error has Occurred: ${error.response.status}`
      })
    }
  }
  callCityData = async (e) => {
    e.preventDefault();
    try {
      await this.callMapData();
      await this.callWeatherData();
      await this.callMovieData();
      this.setState({
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
    let weather = this.state.weatherArray.map((date, i) => (
      <Weather
        cityName={this.state.currentCity}
        date={date.date}
        description={date.description}
        key={i}
        number={i + 1}
      />
    ))
    let movies = this.state.movieArray.map((movie, i) => {
      let imgURL = movie.imgURL ? `https://image.tmdb.org/t/p/w500/${movie.imgURL}` : '';
      return (
      <Movie
        title={movie.title}
        overview={movie.overview}
        avgVotes={movie.avgVotes}
        imgURL={imgURL}
        popularity={movie.popularity}
        releaseDate={movie.releaseDate}
        key={i}
        number={i + 1}
      />
      )})
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
            <>
                <Card>
                  <Card.Body>
                    <Card.Title>{this.state.cityData.name}</Card.Title>
                    <Card.Text>Latitude: {this.state.latitude}</Card.Text>
                    <Card.Text>Longitude: {this.state.longitude}</Card.Text>
                    <Card.Img src={this.state.imgURL} />
                  </Card.Body>
                </Card>
                {weather}
              <Container className='movies'>
                {movies}
              </Container>
            </>
            :
            <></>
        }
      </>
    );
  }
}
export default App;
