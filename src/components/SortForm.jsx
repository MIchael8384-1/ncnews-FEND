import React from "react";
//sort_by , order

class SortForm extends React.Component {
  state = {
    selectedOption: "",
    sort_by: "created_at",
    order: "desc"
  };
  render() {
    const { sort_by, order } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="sort"
              value="votes"
              checked={sort_by === "votes"}
              onChange={this.handleOptionChange}
            />
            Votes
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="sort"
              value={"comment_count"}
              checked={sort_by === "comment_count"}
              onChange={this.handleOptionChange}
            />
            Comment Count
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="sort"
              value={"created_at"}
              // defaultValue="created_at"
              checked={sort_by === "created_at"}
              onChange={this.handleOptionChange}
            />
            Created At
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="order"
              value="asc"
              checked={order === "asc"}
              onChange={this.handleOrderChange}
            />
            asc
          </label>
          <label>
            <input
              type="radio"
              name="order"
              value="desc"
              // defaultValue="desc"
              checked={order === "desc"}
              onChange={this.handleOrderChange}
            />
            desc
          </label>{" "}
          <button className="btn-sort" type="submit">
            Sort
          </button>
        </div>
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
    this.setState({ sort_by: "created_at", order: "desc" });
    this.props.sortByOptions(sort_by, order);
    console.log("you have selected:", this.state.sort_by);
  };
}

export default SortForm;
