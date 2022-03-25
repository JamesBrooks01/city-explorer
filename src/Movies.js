import React from 'react';
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {
  render() {
    return (
        <Card className='movie'>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
              {
                this.props.imgURL &&
            <Card.Img src={this.props.imgURL}/>
              }
            <Card.Text>{this.props.overview}</Card.Text>
            <Card.Text>Average Vote: {this.props.avgVotes}</Card.Text>
            <Card.Text>Popularity: {this.props.popularity}</Card.Text>
            <Card.Text>Released on: {this.props.releaseDate}</Card.Text>
          </Card.Body>
        </Card>
    );
  }
}

export default Movies