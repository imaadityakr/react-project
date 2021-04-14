import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link 
  } from 'react-router-dom' 

  class Nav extends Component {
    render() {
        var auth = JSON.parse(localStorage.getItem('token'))
        return (
            <div>
                <Link to="home" >Home</Link>
                <Link to="about" >About</Link>
                {
                    auth ?
                    <Link to="logout" >Logout</Link>
                    :
                    <Link to="/" >Login</Link>
                }

            </div>
        );
    }
}

export default Nav;