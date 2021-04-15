import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Redirect
} from "react-router-dom";


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
            </div>
        );
    }
}

export default Logout;