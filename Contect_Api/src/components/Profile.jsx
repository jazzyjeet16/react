import React,{useContext,useState} from 'react'
import UserConetxt from '../context/UserContext'

function Profile() {
    const {user}=useContext(UserConetxt)
    if(!user) return <div>Please Login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
