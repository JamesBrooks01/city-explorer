import React from "react";
import Movie from './movie.js'


class Movies extends React.Component {
  render() {
    let movies = this.props.movieArray.map((movie, i) => {
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
      )
    });
    return (
      [movies]
    )
  }
}

export default Movies