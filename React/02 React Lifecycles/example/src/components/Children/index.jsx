import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";

class Children extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      users: [],
      posts: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount");

    // 	fetch('https://jsonplaceholder.typicode.com/users')
    // 	.then(response => response.json())
    // 	.then(data => {
    // 	  this.setState({ users: data });
    // 	});

    //   fetch('https://jsonplaceholder.typicode.com/posts')
    // 	.then(response => response.json())
    // 	.then(data => {
    // 	  this.setState({ posts: data });
    // 	});

    Promise.all([
      axios.get("https://jsonplaceholder.typicode.com/users"),
      axios.get("https://jsonplaceholder.typicode.com/posts"),
    ]).then(([users, posts]) => {
		console.log(users, posts);
		
		this.setState({
			users: users.data,
			posts: posts.data,
		})
	})
	
	;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  addCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        <div className="container d-flex flex-column gap-2">
          {this.state.count}

          <div className="d-flex gap-2">
            <Button
              variant="warning"
              onClick={() => {
                if (!(this.state.count - 1 < 0)) {
                  this.setState({ count: this.state.count - 1 });
                }
              }}
            >
              -
            </Button>
            <Button variant="primary" onClick={this.addCount.bind(this)}>
              +
            </Button>
          </div>
        </div>

        <div>
          <h1>Users</h1>
          <ul>
            {this.state.users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>

          <h1>Posts</h1>
          <ul>
            {this.state.posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Children;
