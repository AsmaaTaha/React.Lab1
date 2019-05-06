import React from 'react';
import axios from 'axios';
import CommentCard from './Crad';
export default class CommentsList extends React.Component
{
state={
    data:[],
}
    componentDidMount()
{
 axios.get("https://jsonplaceholder.typicode.com/comments")
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
            {this.state.data.map( c=> <CommentCard id={c.id} name={c.name} body={c.body} email={c.email}/>)}
          
            </>
        )
    }
}