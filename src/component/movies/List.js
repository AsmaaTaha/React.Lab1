import React from 'react';
import MovieCard from './Card';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import data from '../../data';
// import { Checkbox } from 'react-bootstrap';
class MovieList extends React.Component {
    state = {
        query: '',
        data: this.props.data,
        filteredData: this.props.data,
        checked:true,
        Title: '',
        Year: '',
        imdbID: '',
        Type: '',
        watched: false,
        Poster: 'N/A',
    };
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
    handleInputChange = event => {
        let {checked,query}=this.state;
        if (event.target.type==="checkbox")
        {
        checked=event.target.checked;
        }
        // event.target.value="";
        else{
        query = event.target.value;
        }
        this.setState(prevState => {
            const filteredData = prevState.data.filter(element => {
                
                return (element.Title.toLowerCase().includes(query.toLowerCase()) && element.watched === checked);
              
                    
            });
            return {
                query,
                filteredData,
                checked
            };
        });
    };

    render() {
        return (
            <>
         <form onSubmit={this.handelSubmit}>
              Title  <input type="text" onChange={this.handelChange} name="Title" value={this.state.Title}/>
              Year  <input type="text" onChange={this.handelChange} name="Year" value={this.state.Year}/>
               ImdbID <input type="text" onChange={this.handelChange} name="imdbID" value={this.state.imdbID}/>
               Type <input type="text" onChange={this.handelChange} name="Type" value={this.state.Type}/>
               Watched <input type="text" onChange={this.handelChange} name="watched" value={this.state.watched}/>
                <button type="submit">
                    Add Movie
                 </button>

            </form>
                        {/* <Link to={"/addMovie"}>Add Movie</Link> */}
                <div className="searchForm">
                    <form>
                        <input
                            placeholder="Search for..."
                            value={this.state.query}
                            onChange={this.handleInputChange} />
                        <input type="checkbox" onChange={this.handleInputChange}  />
                    </form>
                    <div>{this.state.filteredData.map(e => <MovieCard {...e} key={e.imdbID} />)}</div>
                </div>
            </>
        );
    }
}

export default MovieList;