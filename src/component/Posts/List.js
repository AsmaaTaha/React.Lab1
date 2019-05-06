import React from 'react';
import axios from 'axios';
import PostCard from './Card';
import {Link} from 'react-router-dom';
export default class PostList extends React.Component {
    state = {
        data: [],
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                // handle success
                const data = response.data;
                this.setState({ data: data });
            }
            )
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .then(() => {
                // always executed
            });
    }
    render() {
        return (
        <>
            <Link to={"/PostAdd"}>Add Post</Link>
           {this.state.data.map(p => (<PostCard key={p.id} title={p.title} id={p.id} />))}
        </>
        )
    }
}

