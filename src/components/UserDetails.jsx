import React, { Component } from "react";
import * as api from "./api";
import Errors from "./Errors";

class UserDetails extends Component {
  state = { details: [], error: null, isLoading: true };
  render() {
    const { details, isLoading, error } = this.state;

    if (error) {
      return <Errors status={error.status} message={error.msg} />;
    }

    if (isLoading) return <p>Loading</p>;
    return (
      <div>
        <p>Logged In: {details.username}</p>
      </div>
    );
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    api
      .fetchUser(this.props.user)
      .then(userDetails => {
        this.setState({ details: userDetails, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          error: { msg: response.data.msg, status: response.status },
          isLoading: false
        });
      });
  };
}

export default UserDetails;
