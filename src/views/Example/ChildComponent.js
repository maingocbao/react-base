import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };
  handerShowHide = (status) => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    console.log(">>> check :", check);
    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handerShowHide()}>show</button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrJobs.map((id, index) => {
                return (
                  <div key={id.id}>
                    {id.title}-{id.salary}
                  </div>
                );
              })}
            </div>
            <div>
              {this.props.name}
              <button onClick={() => this.handerShowHide()}>hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
