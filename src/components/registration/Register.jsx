import React from "react";
import axios from "axios";
import { endpoint } from "../../constants";

export default class Register extends React.Component {
    componentDidMount(){
        if (sessionStorage.getItem('token') != null) {
            this.props.history.push('users');
        }
    }
    state ={}
    onRegister = () => {
        axios.post(`${endpoint}/user`, {
            userName: this.state.userName,
            password: this.state.password,
            gender: this.state.gender
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
                        <label for="email">E-mail : </label>
                        <input id="email" type="email" name="userName" placeholder="youremail@gmail.com" 
                            onChange={this.onChangeHandler}/><br/>
                        <label for="password">Password : </label>
                        <input id="password" type="password" name="password" placeholder="password" 
                            onChange={this.onChangeHandler}/><br/>
                        <label for="gender">MALE </label>
                        <input type="radio" name="gender" value="MALE" onChange={this.onChangeHandler}/><br/>
                        <label for="gender">FEMALE </label>
                        <input type="radio" name="gender" value="FEMALE" onChange={this.onChangeHandler}/><br/>
                        <button type="button" onClick={this.onRegister}>Login</button>
                        <span>{this.state.error ? "This username already exists." : null}</span>
                    </div>
                </section>
            </div>
        );
    }
}