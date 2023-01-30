import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: "1", title: "developers", salary: "500" },
      { id: "2", title: "developers1", salary: "600" },
      { id: "3", title: "developers2", salary: "700" },
    ],
  };
  handleOnchangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleOnchangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert("xin chào:" + this.state.firstName);
    console.log(">>>> check data:", this.state);
  };
  // state = {
  //   name: "bảo",
  //   old: "11",
  // };
  // handleOnchangeName = (event) => {
  //   this.setState({
  //     name: event.target.value,
  //   });
  // };
  // handleOnButton = () => {
  //   alert("hihih");
  // };
  render() {
    console.log(">>> call render: ", this.state);
    return (
      <>
        {/* <div className="fist">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnchangeName(event)}
          />
        </div>
        <div>hello {this.state.name}</div>
        <div className="Button">
          <button onClick={() 
          => this.handleOnButton()}>Submit</button>
        </div> */}
        <form>
          <AddComponent />
          <label htmlFor="fname">first name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleOnchangeFirstName(event)}
          />
          <br />
          <div>hello {this.state.firstName}</div>
          <label htmlFor="lname">Last name:</label>
          <br />

          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleOnchangeLastName(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            onClick={(event) => {
              this.handleSubmit(event);
            }}
          />
        </form>
        <ChildComponent name={"one"} age={22} arrJobs={this.state.arrJobs} />
      </>
    );
  }
}

export default MyComponent;
