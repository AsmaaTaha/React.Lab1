import React from 'react';
import axios from 'axios';
export default class DisplayUser extends React.Component
{
    state={
data:{},
    }
    componentDidMount()
    {
        const id =this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
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
            user id:<h1>{this.state.data.id}</h1>
            user name: <h1>{this.state.data.username}</h1>
            user email : <h1>{this.state.data.email}</h1>
            user phone Number : <h1>{this.state.data.phone}</h1>
            </>
        )
    }
}