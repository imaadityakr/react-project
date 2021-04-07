import React, { Component } from 'react';
import {
    Redirect
} from "react-router-dom";

class Auth extends Component {
    constructor()
    {
        super()
        this.state={
            isRegister:false
        }
    }
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

    register()
    {
        console.warn("state", this.state)
        fetch('https://registrationmysite.herokuapp.com/api/user/registration/',{
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

        var auth = JSON.parse(localStorage.getItem('token'))
        
        return (
            <div>
                {
                    auth ? <Redirect to="home" />:null
                }
                {
                    !this.state.isRegister?
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
                        <button onClick={()=>this.setState({ isRegister: true})}>Go To Register</button>
                    </div>
                    :
                    <div>
                        <input type="text" 
                        placeholder="Name"
                            onChange = {(e) => { this.setState({ name: e.target.value }) }}
                        /><br /><br />
                        <input type="text" 
                        placeholder="email"
                            onChange = {(e) => { this.setState({ email: e.target.value }) }}
                        /><br /><br />
                        <input type="text" 
                        placeholder="password"
                            onChange = {(e) => { this.setState({ password: e.target.value }) }}
                        /><br /><br />
                        <button onClick={()=>this.register()}>Register</button>
                        <button onClick={()=>this.setState({ isRegister: false})}>Go To Login</button>
                    </div>
                }

            </div>
        );
    }
}

export default Auth;