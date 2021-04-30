import './App.css';
import React from 'react';
import ToDo from './ToDo';
import { render } from '@testing-library/react';
import {Redirect} from "react-router-dom";
class Login extends React.Component {

    constructor(props) {
        super();
        
        const token=localStorage.getItem("Token")
        this.state = {
            username: "",
            password: "",
            email: "",
            isLoggedIn:false,
            
        }
    }

   
    login = async() => {
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        let res = await fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        });
        let resJson = await res.json();
        if (resJson.token) {
            alert("Login success");
             localStorage.setItem("Token",resJson.token);
             this.setState({

                isLoggedIn: true

              });
             
        } else {
          
            alert(resJson.error)
        }
    }
 setInputValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render() {
         if(this.state.isLoggedIn){
            return <Redirect to ="/ToDo"/> }
        return <div className = "card w-50 mt-4" >
            <div className = "card-header" >
            <h1> Login </h1></div >
            <div className = "card-body" >

            Username: < input type = "text"
        value = { this.state.username }
        onChange = { this.setInputValue }
        name = "username" /> <br/>
            Password: < input type = "password"
        value = { this.state.password }
        onChange = { this.setInputValue }
        name = "password"/> <br/>
            Email: < input type = "email"
        value = { this.state.email }
        onChange = {
            (e) => this.setState({ email: e.target.value })
        }
        name = "email" /> <br/>
            <button onClick = { this.login }
        className = 'btn btn-primary mt-2 '> Login </button>   </div ></div >
    }
}
export default Login;