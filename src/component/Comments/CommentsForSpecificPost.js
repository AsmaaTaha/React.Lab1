import React from 'react';
import axios from 'axios';
import CommentCard from './Crad';
export default class CommentforPost extends React.Component
{
    state ={
        data:[],
    }
    componentDidMount()
    {
        const id =this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
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
            {this.state.data.map( c=> <CommentCard name={c.name} body={c.body} email={c.email}/>)}
          
            </>
        )
    }
}