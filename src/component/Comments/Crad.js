import React from 'react';
import {Link} from 'react-router-dom';
const commentCard =(props)=>
{
return(
    <>
    comment name : <h1>{props.name}</h1>
    comment body :<h1>{props.body}</h1>
    comment email : <h1>{props.email}</h1>
    {/* <Link to ={`/CommentDetails/${props.id}`}>Comment Details</Link> */}
    </>
)
}
export default commentCard;