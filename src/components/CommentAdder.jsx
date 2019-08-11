import React, { Component } from "react";

class CommentAdder extends Component {
  state = { username: "jessjelly", body: "" };
  render() {
    return (
      <div>
        {this.props.user && (
          <form onSubmit={this.handleSubmit}>
            {/* <label htmlFor="username">Name:</label>
        <input
          type="text"
          view={this.state.username}
          id="username"
          onChange={e => this.updateInputState(e.target.value, "username")}
        />
        <label htmlFor="body">Comment:</label> */}
            <input
              type="text"
              value={this.state.body}
              id="info"
              required
              onChange={e => this.updateInputState(e.target.value, "body")}
            />
            <button>Add Comment</button>
          </form>
        )}
      </div>
    );
  }
  updateInputState = (text, key) => {
    this.setState({ [key]: text });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, body } = this.state;
    console.log(this.props);
    this.props.addItem({ username, body });
    this.setState({ username: "", body: "" });
  };
}

export default CommentAdder;
