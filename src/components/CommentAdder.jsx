import React, { Component } from "react";

class CommentAdder extends Component {
  state = { name: "", info: "" };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          view={this.state.name}
          id="name"
          onChange={e => this.handleChange(e.target.value, "name")}
        />
        <label htmlFor="info">Comment:</label>
        <input
          type="text"
          value={this.state.info}
          id="info"
          onChange={e => this.handleChange(e.target.value, "info")}
        />
        <button>Add Comment</button>
      </form>
    );
  }
  handleChange = (text, key) => {
    this.setState({ [key]: text });
  };

  handleSubmit = e => {
    e.preventDefault();
  };
}

export default CommentAdder;
