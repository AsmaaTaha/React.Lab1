import React from 'react';
import {Link} from 'react-router-dom';
const HomePage= (props)=>{
return (
    <>
<Link to={"/posts"}>Posts</Link>
<h1>----------------</h1>
<Link to={"/users"}>Users</Link>
<h1>----------------</h1>
<Link to={"/comments"}>comments</Link>
    </>
)
}
export default HomePage;