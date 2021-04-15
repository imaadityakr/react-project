import React, { Component } from 'react';
import {
    Redirect
} from "react-router-dom";

class Login extends Component {

    login()
    {
        console.warn("state", this.state)
        fetch('https://registrationmysite.herokuapp.com/api/user/login/',{
            method: "POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp.token)
                localStorage.setItem("token", JSON.stringify(resp.token))
            })
        })
    }

    render() {
        
        return (

            <div>
                <input type="text" 
                placeholder="email"
                    onChange = {(e) => { this.setState({ email: e.target.value }) }}
                /><br /><br />
                <input type="text" 
                placeholder="password"
                    onChange = {(e) => { this.setState({ password: e.target.value }) }}
                /><br /><br />
                <button onClick={()=>this.login()}>Login</button>
            </div>

        );
    }
}

export default Login;