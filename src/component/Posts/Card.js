import React from 'react';
import {Link} from 'react-router-dom';
 const PostCard = (props)=>
{
    return (
        <>
       <h1>{props.title}</h1>
       <Link to = {`/posts/${props.id}`}><h1>View</h1></Link>
       <Link to = {`/CommentsofPost/${props.id}`}><h1>see comments </h1></Link>
       </>
    );
}
export default PostCard;