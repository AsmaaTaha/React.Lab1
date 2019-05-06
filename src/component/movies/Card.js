import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';

const MovieCard = (props) => {
    const { Title, Year, imdbID, Type, Poster } = props;
    return (<Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Poster === "N/A" ? "https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg" : Poster} />
        <Card.Body>
            <Card.Title>{Title}</Card.Title>
            <Card.Text>
                {Year}
            </Card.Text>
            <Card.Text>{imdbID}</Card.Text>
            <Card.Text>{Type}</Card.Text>
        </Card.Body>
    </Card>);
}


export default MovieCard;
