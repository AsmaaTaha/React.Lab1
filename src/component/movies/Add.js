import React from 'react';
import data from '../../data';
export default class AddMovie extends React.Component {
    state = {
        Title: '',
        Year: '',
        imdbID: '',
        Type: '',
        watched: false,
        Poster: 'N/A',
    }
    handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    handelSubmit() {
        const obj = {
            Title: this.state.Title,
            Year: this.state.Year,
            imdbID: this.state.imdbID,
            Type: this.state.Type,
            watched: false,
            Poster: 'N/A',
        }
        data.push(obj);
    }
    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <input type="text" onChange={this.handelChange} name="Title" value={this.state.Title}/>
                <input type="text" onChange={this.handelChange} name="Year" value={this.state.Year}/>
                <input type="text" onChange={this.handelChange} name="imdbID" value={this.state.imdbID}/>
                <input type="text" onChange={this.handelChange} name="Type" value={this.state.Type}/>
                <input type="text" onChange={this.handelChange} name="watched" value={this.state.watched}/>
                <button type="submit">
                    Add Movie
                 </button>

            </form>
        )
    }
}