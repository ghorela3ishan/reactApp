import React from "react";

export default class Logout extends React.Component {
    render() {
        if (sessionStorage.getItem('token') == null)
         return null;
        return (
            <button onClick={this.props.logoutHandler}>Logout</button>
        )
    }
}