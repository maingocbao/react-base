import React from "react";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
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
          <label htmlFor="fname">first name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleOnchangeFirstName(event)}
          />
          <br />
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
      </>
    );
  }
}

export default MyComponent;
