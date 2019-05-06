import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import UserCard from './Card';
export default class UserList extends React.Component
{
    state={
        data:[],
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/users')
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
    render()
    {
        return(
<>
<Link to={"/UserAdd"}>Add User</Link>
{
    this.state.data.map(u=><UserCard key={u.id} id={u.id} username={u.name} email={u.email}  phone={u.phone} />)
}
</>
        )
    }
}