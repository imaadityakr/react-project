import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem('token')
    } 
    render() {
        return ( 
            <div>
                <br></br>
                <br></br>
                <h1>You have been logged out!!</h1>
                <h2><Link to="/login">Login Again</Link></h2>
            </div>
        );
    }
}

export default Logout;