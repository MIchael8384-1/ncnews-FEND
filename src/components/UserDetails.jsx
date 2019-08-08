import React, { Component } from "react";
import * as api from "./api";

class UserDetails extends Component {
  state = { details: [], isLoading: true };
  render() {
    const { details, isLoading } = this.state;
    if (isLoading) return <p>Loading</p>;
    return (
      <div>
        <p>User: {details.username}</p>
      </div>
    );
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    api.fetchUser(this.props.user).then(userDetails => {
      this.setState({ details: userDetails, isLoading: false });
    });
  };
}

export default UserDetails;
