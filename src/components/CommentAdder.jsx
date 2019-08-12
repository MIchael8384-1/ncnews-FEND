import React, { Component } from "react";
import "./commentAdder.css";

class CommentAdder extends Component {
  state = { username: "jessjelly", body: "" };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.body}
            id="info"
            required
            onChange={e => this.updateInputState(e.target.value, "body")}
          />
          <br />
          <button className="btn-group">ADD COMMENT</button>
        </form>
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
