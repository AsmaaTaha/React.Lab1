import React, { Component } from 'react';
import data from './data';
import MovieList from './component/movies/List';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import PostList from './component/Posts/List';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import DisplayPost from './component/Posts/Display';
import AddPost from './component/Posts/Add';
import Nav from './Nav';
import UserList from './component/Users/List';
import DisplayUser from './component/Users/Display';
import UserAdd from './component/Users/Add';
import AddMovie  from './component/movies/Add';
import PostofSpecificUser from './component/Posts/PostsofSpecificUser';
import CommentsofPost from './component/Comments/CommentsForSpecificPost';
import AllCommnets from './component/Comments/List';
import CommentDetails from './component/Comments/Crad';
// import SearchCard from './component/movies/SearchCard';
// app1

//  class App extends Component {
// render() {
//   return (
//           <div>
//            <MovieList data={data}/>
//   {/* <AddMovie/> */}
//          </div>
//          );
// }
// }

// const App = props  =>(
//   <Router>
//     <Switch>
//     <MovieList data={data}/>
// <Route exact path="/" Component={MovieList}/>
// <Route exact path="/addMovie" Component={AddMovie}/>
//     </Switch>
//   </Router>
// )
// app2

const App = props => (
  <>
  <Router>
    <>
  <Nav />
    <Switch>
      {/* <Route exact path="/" component={HomePage} /> */}
      <Route exact path="/posts" component={PostList} />
      <Route exact path="/posts/:id" component={DisplayPost} />
      <Route exact path="/postsUser/:id" component={PostofSpecificUser} />
      <Route exact path="/PostAdd" component={AddPost} />
      <Route exact path="/Users" component={UserList} />
      <Route exact path="/user/:id" component={DisplayUser} />
      <Route exact path="/UserAdd" component={UserAdd} />
      <Route exact path="/CommentsofPost/:id" component={CommentsofPost} />
      <Route exact path="/comments" component={AllCommnets} />
      <Route exact path= "/CommentDetails/:id" component={CommentDetails} />

     

    </Switch>
</>
  </Router>
  </>

)

// the diffrent between app=(props)=>{} and the 
//peventdefault function ??

export default App;

