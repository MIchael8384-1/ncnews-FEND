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

// class DropdownPage extends Component {
//   state = {
//     topics: [],
//     users: [],
//     sort_by: "created_at",
//     order: "DESC",
//     limit: 10
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <label name="topicLabel"> Sort By :</label>
//             <select onChange={this.handleSortBy} defaultValue="created_at">
//               {" "}
//               <option value="created_at" defaultValue>
//                 Date created
//               </option>
//               <option value="votes" defaultValue>
//                 Votes
//               </option>
//               <option value="title" defaultValue>
//                 Title
//               </option>
//               <option value="author" defaultValue>
//                 Author
//               </option>
//             </select>
//           </div>
//           <div>
//             <label> Order:</label>
//             <select id="order" onChange={this.handleOrder} defaultValue="DESC">
//               <option value="ASC"> Ascending</option>
//               <option value="DESC"> Descending</option>
//             </select>
//           </div>
//           <div>
//             <label>Results:</label>
//             <select id="limit" onChange={this.handleLimit}>
//               <option value="5"> 5</option>
//               <option value="10"> 10</option>
//             </select>
//           </div>
//           <button type="submit" className="submit">
//             Sort
//           </button>
//         </form>
//       </div>
//     );
//   }

//   componentDidUpdate = (prevProps, prevState) => {
//     const { sort_by, order, limit } = this.state;
//     const { sortTheArticles } = this.props;
//     sortedArticles(sort_by, order, limit).then(articles => {
//       sortTheArticles(articles);
//     });
//   };

//   handleOrder = e => {
//     this.setState({ order: e.target.value });
//   };
//   handleLimit = e => {
//     this.setState({ limit: e.target.value });
//   };
//   handleSortBy = e => {
//     this.setState({ sort_by: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { sort_by, limit, order } = this.state;
//     const { sortTheArticles } = this.props;
//     sortedArticles(sort_by, order, limit)
//       .then(articles => {
//         sortTheArticles(articles);
//       })
//       .then(this.setState);
//   };
// }
// export default DropdownPage;
