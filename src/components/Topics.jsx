// import React, { Component } from "react";
// import * as api from "./api";
// import { Link } from "@reach/router";

// class Topic extends Component {
//   state = {
//     topics: [],
//     loading: true
//   };
//   componentDidMount() {
//     this.getTopicsList();
//   }

//   getTopicsList = () => {
//     api.fetchTopics().then(topicsData => {
//       this.setState({ topics: topicsData, loading: false });
//     });
//   };

//   render() {
//     const { topics } = this.state;
//     const { loading } = this.state;
//     let content;

//     if (loading) {
//       content = <div>Loading...</div>;
//     } else {
//       return topics.map(topicsList => {
//         return (
//           <ul>
//             <li key={topicsList.slug} className="topicsList">
//               <Link to="/topicChoice">
//                 <h2>Topic:{topicsList.slug}</h2>
//               </Link>
//               <br />
//               <h3>{topicsList.description}</h3>
//             </li>
//           </ul>
//         );
//       });
//     }
//     return <div>{content}</div>;
//   }
// }

// export default Topic;
