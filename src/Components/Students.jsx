export default function Student(props) {
  return (
    <div className="container p-1">
      <div className="row border">
        <div className="col-2">
          <img
            src={`https://ui-avatars.com/api/?name=${props.fullName}`}
            className="w-50 py-2"
          ></img>
        </div>
        <div className="col-10">
          {props.fullName}
          <br />
          Work Experience - {props.workExperience} years.
        </div>
      </div>
    </div>
  );
}