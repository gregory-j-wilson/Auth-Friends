import React, { useState } from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import friendsimg from './friends.jpg'
import {PrivateRoute} from './components/PrivateRoute'
import {FriendsList} from './components/FriendsList'
import {AddFriend} from './components/AddFriend'


function App() {

  const [friends, setFriends] = useState([])

  return (
    <div className="App">
      <h1>Friends List</h1>
      <button><Link to='/'>Home</Link></button>
      <button><Link to='/login'>Login Page</Link></button>
      <button><Link to='/protected'>Friends</Link></button>
      <br></br><br></br><br></br>

      <Route exact path='/'>
        <img src={friendsimg} alt="friends"></img>
      </Route>
      <Route path='/login'>
        <LoginForm />
      </Route>
      <PrivateRoute exact path='/protected' component={FriendsList}>
        
      </PrivateRoute>
      <Route exact path='/addfriend'>
        <AddFriend setFriends={setFriends}></AddFriend>
      </Route>
    </div>
  );
}

export default App;
