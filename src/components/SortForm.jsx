import React from "react";
import "./sortForm.css";
class SortForm extends React.Component {
  state = {
    selectedOption: "",
    sort_by: "created_at",
    order: "desc"
  };
  render() {
    const { sort_by, order } = this.state;
    return (
      <form className="sortForm" onSubmit={this.handleSubmit}>
        <div className="flex-container">
          <div className="sortType">
            <div className="checkbox">
              <label className="containerCheckBox">
                <input
                  type="checkbox"
                  name="sort"
                  value="votes"
                  checked={sort_by === "votes"}
                  onChange={this.handleOptionChange}
                />
                VOTES
              </label>
            </div>
            <div className="checkbox">
              <label className="containerCheckBox">
                <input
                  type="checkbox"
                  name="sort"
                  value={"comment_count"}
                  checked={sort_by === "comment_count"}
                  onChange={this.handleOptionChange}
                />
                COMMENT COUNT
              </label>
            </div>
            <div className="checkbox">
              <label className="containerCheckBox">
                <input
                  type="checkbox"
                  name="sort"
                  value={"created_at"}
                  checked={sort_by === "created_at"}
                  onChange={this.handleOptionChange}
                />
                CREATED AT
              </label>
            </div>
          </div>

          <div className="sortOrder">
            <div>
              <label className="containerCheckBox">
                <input
                  type="checkbox"
                  name="order"
                  value="asc"
                  checked={order === "asc"}
                  onChange={this.handleOrderChange}
                />
                ASC
              </label>
            </div>
            <div>
              <label className="containerCheckBox">
                <input
                  type="checkbox"
                  name="order"
                  value="desc"
                  checked={order === "desc"}
                  onChange={this.handleOrderChange}
                />
                DESC
              </label>
            </div>
          </div>
        </div>{" "}
        <button className="btn-sort" type="submit">
          SORT
        </button>
      </form>
    );
  }
  handleOptionChange = changedEvent => {
    this.setState({ sort_by: changedEvent.target.value });
  };

  handleOrderChange = changedOrder => {
    this.setState({ order: changedOrder.target.value });
  };

  handleSubmit = e => {
    const { sort_by, order } = this.state;
    e.preventDefault();
    this.props.sortByOptions(sort_by, order);
  };
}

export default SortForm;
