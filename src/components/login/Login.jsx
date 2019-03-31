import React from "react";
import axios from "axios";
import { endpoint } from "../../constants";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
    componentDidMount() {
        if (sessionStorage.getItem('token') != null) {
            this.props.history.push('users');
        }
    }
    state ={}
    onLogin = () => {
        axios.post(`${endpoint}/user/login`, {
            userName: this.state.userName,
            password: this.state.password
        }).then( res => {
            this.setState({error : null});
            sessionStorage.setItem('token', res.data.data.token);
            this.props.history.push("/users");
        }).catch( e => {
            this.setState({error : e.message});
        });      
    }
    onChangeHandler = (e) => {
        let key = e.target.name;
        let value = e.target.value;  
        this.setState({[key]: value})
    }
    render() {
        return (
            <div>
                <section>
                    <div>
                        <label for="email">E-mail:</label>
                        <input id="email" type="email" name="userName" placeholder="youremail@gmail.com" 
                            onChange={this.onChangeHandler}/><br/>
                        <label for="password">Password:</label>
                        <input id="password" type="password" name="password" placeholder="password" 
                            onChange={this.onChangeHandler}/><br/>
                        <button type="button" onClick={this.onLogin}>Login</button>
                        <span>{this.state.error ? "Incorrect Credentials" : null}</span>
                    </div>
                </section>
                <section>
                    <Link to="/register">Not a User? Create an account</Link>
                </section>
            </div>
        );
    }
}