import React from 'react';
import axios from 'axios';
import CommentCard from '../Comments/Crad';
export default class DisplayPost extends React.Component {
    state = {
        data: {},
        Users:{},
        comments:[],
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                // handle success
                // console.log(response)
                const data = response.data;
                this.setState({ data: data });
                axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.state.data.id}`)
                .then((response) => {
                    const comments = response.data;
                    this.setState({ comments: comments });
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
            )
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .then(() => {
                // always executed
            });
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                // handle success
                // console.log(response)
                const users = response.data;
                this.setState({ Users: users });
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
               Post Id : <h1>{this.state.data.id}</h1>
               Post Title :  <h1>{this.state.data.title}</h1>
               UserId :  <h1>{this.state.Users.username}</h1>
               Post Body :  <h1>{this.state.data.body }</h1>
               {this.state.comments.map( c=> <CommentCard name={c.name} body={c.body} email={c.email}/>)}
            </>
        )


    }
}