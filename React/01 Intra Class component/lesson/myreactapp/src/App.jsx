import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Ani",
      users: [
        { name: "Ani1", surname: "Sargsyan1", age: 25 },
        { name: "Ani2", surname: "Sargsyan2", age: 26 },
        { name: "Ani3", surname: "Sargsyan3", age: 27 },
        { name: "Ani4", surname: "Sargsyan4", age: 28 },
        { name: "Ani5", surname: "Sargsyan5", age: 29 },
      ],
    };
  }

  handleDelete = (index) => {
    const newUsers = this.state.users.filter((_, i) => i !== index);
    this.setState({ users: newUsers });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <h1 className="text-primary">Hello dear {this.state.name}</h1>
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">age</th>
                <th scope="col">delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="col">1</th>
                    <td>{user?.name}</td>
                    <td>{user?.surname}</td>
                    <td>{user?.age}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => {
                          this.handleDelete(index);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
