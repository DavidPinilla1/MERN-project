import React from 'react';
import axios from 'axios';
const Logout =(props)=>{
    let request=axios.get(`/api/logout`)
    .then(request=>{
        setTimeout(()=>{
            props.history.push('/')
        },2000)
    })
    return (
        <div className="logout_container">
        <h1>
            You are being logged-out
        </h1>
        </div>
    )
}

export default Logout;