import React from 'react';
import {Link} from 'react-router-dom';

const UserCard =(props)=>
{
return (
<>
<h1>{props.username}</h1>
<h1>{props.email}</h1>
<h1>{props.phone}</h1>
<Link to={`/user/${props.id}`}>View User Details   </Link>
<h1>------</h1>
<Link to={`/postsUser/${props.id}`}>View Posts for these User</Link>
</>
);
}
export default UserCard;