import React from "react";
import Logout from "../logout/Logout"
import axios from "axios";
import { endpoint } from "../../constants";

export default class Users extends React.Component {
    
    getUSers = (pageParams ={ page: 0, size: 25}) => {
        const instance = axios.create({
            baseURL: endpoint,
            timeout: 1000,
            headers: {'X-AUTH-TOKEN': sessionStorage.getItem('token')}
          });

          instance.get('/user', {params: pageParams}).then (res => {
              console.log(res.data.data.content);
              this.setState({data: res.data.data})
          })
    }
    componentDidMount(){
        this.getUSers();
    }
    logoutHandler = () => {
        sessionStorage.removeItem('token');
        this.props.history.push("/login");
    }
    nextSet = () => {
        this.getUSers({page: this.state.data.currentPage+1, size: 25})
    }
    render() {
        let userData = this.state && this.state.data.content.map((data) => {
            return (
                <li key={data.id}>{data.userName}</li>
            )  
          });
        return (
            <div>
                <Logout logoutHandler={this.logoutHandler}/>
                <ul>
                    {userData}
                </ul>
            <button onClick={this.nextSet}>Next Set</button>
            </div>
        );
    }
}