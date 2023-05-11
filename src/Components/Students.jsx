import { faker } from "@faker-js/faker";

export default function Student(props) {
  return (
    <div className="container p-4">
      <div className="row border">
        <div className="col-2">
          <img src={faker.image.avatar()} className="w-50"></img>
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

/* 
https://api.lorem.space/image/face?w=150&h=150 
couldn't be found
*/
