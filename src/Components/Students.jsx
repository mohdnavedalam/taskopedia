export default function Student(props) {
  return (
    <div className="container p-4">
      <div className="row border">
        <div className="col-2">
          <img
            src={`https://ui-avatars.com/api/?name=${props.fullName}`}
            className="w-50"
          ></img>
        </div>
        <div className="col-10">
          {props.fullName}
          <br />
          Programming Experience - {props.programmingExperience} years.
        </div>
      </div>
    </div>
  );
}