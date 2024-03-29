import React from "react";
class Student extends React.Component {
  render() {
    return (
      <div className="col-4 p-1">
        <div className="row border">
          <div className="col-2 ">
            <img
              src={`https://ui-avatars.com/api/?name=${this.props.fullName}`}
              className="w-60 py-2"
            ></img>
          </div>
          <div className="col-8">
            {this.props.fullName}
            <br />
            Work Experience - {this.props.workExperience} years.
          </div>
          <div className="col-2">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Student;
