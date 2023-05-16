const Student = (props) => {
  return (
    <div className="col-4 p-1">
      <div className="row border">
        <div className="col-2 ">
          <img
            src={`https://ui-avatars.com/api/?name=${props.fullName}`}
            className="w-60 py-2"
          ></img>
        </div>
        <div className="col-8">
          {props.fullName}
          <br />
          Work Experience - {props.workExperience} years.
        </div>
        <div className="col-2">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Student;