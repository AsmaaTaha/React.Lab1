import React from 'react';
import axios from 'axios';
import PostCard from './Card';
export default class PostsForUser extends React.Component
{
    state={
        data:[],
    }
    componentDidMount()
    {
        const id =this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => {
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
    render()
    {
        return(
            <>
{            this.state.data.map(p => (<PostCard key={p.id} title={p.title} id={p.id} />))
}            </>
        )
    }
}