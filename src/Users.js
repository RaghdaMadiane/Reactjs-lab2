import logo from './logo.svg';
import './App.css';
import React from 'react';
import Menu from './Menu';
import {Redirect} from "react-router-dom";

class App extends React.Component {

    constructor(props) {
        super();
		const token=localStorage.getItem("Token");
        let isLoggedIn=true
		if(token==null){
			console.log("isLoggedIn=false")
			isLoggedIn=false
		}
        this.state = {isLoggedIn}
    }

    render() {
		if(this.state.isLoggedIn==false){
            return <Redirect to="/"/>
        }
        return <div >
          <Menu></Menu>
            <UserList />
            </div>
    }
}

class UserList extends React.Component {

    constructor() {
        super();
        this.state = {
            users: [],
            loading: false
        };
    }

    async componentDidMount() {
        this.setState({ loading: true });
        setTimeout(async() => {


            let res = await fetch("https://reqres.in/api/users?page=2", {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            });
            let resJson = await res.json();
            this.setState({ users: resJson.data, loading: false });
        }, 2000)
    }

    render() {
        return <div > {!this.state.loading ? this.state.users.map((item) => {
                    return <UserView key = { item.id }
                    user = { item }
                    />
                }) : "Loading Users"
            } <
            /div>
    }
}

class UserView extends React.Component {
    constructor() {
        super();

    }

    render() {
        return <div className = "card w-50 mb-4" >
            <
            img src = { this.props.user.avatar }
        style = {
            { width: 100, height: 100 } }
        /><br/ >
        <
        div className = "card-body" >
            <
            div className = "card-title" > { this.props.user.first_name } { this.props.user.last_name } < /div> <
            div className = "card-text" > Email: { this.props.user.email } < /div></div >
            <
            /div>
    }
}

export default App;