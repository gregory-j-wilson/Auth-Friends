import React, {useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router'

const initialFriendValues = {
    name: '',
    age: '',
    email: ''
}

export const AddFriend = (props) => {

    const [friendValues, setFriendValues] = useState(initialFriendValues)

    const {setFriends} = props

    const handleFriendChange = (e) => {
        setFriendValues({ 
            ...friendValues,
            [e.target.name]: e.target.value,
        });
      };

    const history = useHistory()

    const handleFriendSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
          .post("/api/friends", friendValues)
          .then((res) => {
            console.log(res);
            history.push("/protected");
            setFriends(res.data)
          })
          .catch((err) => console.log(err));

          setFriendValues({
              name: '',
              age: '',
              email: ''
          })
      };



    return (
        <div>
        <h2>Add Friend</h2>
        <form onSubmit={handleFriendSubmit}>
            <label htmlFor="name">Name:</label>
            <input 
                type="text"
                name="name"
                id="name"
                value={friendValues.name}
                onChange={handleFriendChange}
                ></input>
            <br></br>
            <label htmlFor="age">Age:</label>
            <input 
                type="text"
                name="age"
                id="age"
                value={friendValues.age}
                onChange={handleFriendChange}
                ></input>
                <br></br>
            <label htmlFor="email">Email:</label>
            <input 
                type="text"
                name="email"
                id="email"
                value={friendValues.email}
                onChange={handleFriendChange}
                ></input>
                <br></br><br></br>
                <button className="add-new-friend-button" type="submit">Add New Friend</button>
        </form>
        </div>
    )

}