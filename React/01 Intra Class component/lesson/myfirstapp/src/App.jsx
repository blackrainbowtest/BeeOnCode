import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Ani",
      users: [
        {
          name: "Ani1",
          surname: "Sargsyan1",
          age: 25,
        },
        { name: "Ani2", surname: "Sargsyan2", age: 26 },
        { name: "Ani3", surname: "Sargsyan3", age: 27 },
        { name: "Ani4", surname: "Sargsyan4", age: 28 },
        { name: "Ani5", surname: "Sargsyan5", age: 29 },
      ],
    };
  }

  delete(index) {
    const arr = this.state.users.filter((_, ind) => {
      console.log(ind !== index);
      
      return(ind !== index)
    })
    console.log(arr, index)
    this.setState({users: arr})
  } 

  render() {
    return (
      <div className="container">
        <h1 className="display-3">Hello my dear {this.state.name}</h1>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((value, index) => {
              return (
                <React.Fragment key={index}>
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{value.name}</td>
                    <td>{value.surname}</td>
                    <td>{value.age}</td>
                    <td>
                      <button className="btn btn-outline-danger" onClick={() => {
                        this.delete(index)
                      }}>Delete</button>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;





