import React from 'react';
import axios from 'axios';
export default class DisplayPost extends React.Component {
    state = {
        data: {},
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then((response) => {
                // handle success
                // console.log(response)
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
               Post Id : <h1>{this.state.data.postId}</h1>
               comment id :  <h1>{this.state.data.id}</h1>
               name :  <h1>{this.state.Users.name}</h1>
               email  :  <h1>{this.state.data.email }</h1>
               body : <h1>{this.state.data.body }</h1>
            </>
        )


    }
}