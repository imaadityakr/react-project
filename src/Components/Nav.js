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
                    <div>
                        <Link to="home" >Home</Link>
                        <Link to="about" >About</Link>
                    </div>
                {
                    !auth ? 
                    <div>
                        <Link to="registration" >Registration</Link>
                        <Link to="login" >Login</Link> 
                    </div>
                    :
                    <div>
                        <Link to="logout" >Logout</Link>
                    </div>

                }

            </div>
        );
    }
}

export default Nav;