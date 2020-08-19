import React, {useEffect, useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {Link} from 'react-router-dom'

const initialFriends = []

export const FriendsList = (props) => {

    const [friends, setFriends] = useState(initialFriends)

    useEffect(() => {
        getFriends()
    })

    const getFriends = () => {
    
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            setFriends(res.data)
        })
        
    }

    return (
        <div>
            <h2>Friends</h2>
            {friends.map( friend => {
            return (
            <div key={friend.id}>
            <br></br>
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p></div>)
            })}
        

        <button><Link to='/addfriend'>Add Friend</Link></button>

        
        </div>
    )

}