import React from "react";

class ChildComponent extends React.Component {
  render() {
    let { arrJobs } = this.props;

    return (
      <>
        <div>
          <button>show</button>
        </div>
        <div className="job-lists">
          {arrJobs.map((id, index) => {
            if (id.salary >= 600) {
              return (
                <div key={id.id}>
                  {id.title}-{id.salary}
                </div>
              );
            }
          })}
        </div>
        <div>
          <button>hide</button>
        </div>
      </>
    );
  }
}

export default ChildComponent;
