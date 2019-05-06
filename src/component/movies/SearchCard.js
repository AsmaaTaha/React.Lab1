import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import MovieCard from './Card';
import MovieList from './List';

class SearchCard extends React.Component{
    render() {
        // constructor() {

        // }
        // handleChange() {
        // }
        return (<input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />);
    }
}
export default SearchCard;