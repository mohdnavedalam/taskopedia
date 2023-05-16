import Student from './Students/Students';
import StudentReview from './Students/StudentReview';

function MainBody() {
  const whatWeWillLearn = "React JS";
  const totalLectures = 3;

  return (
    <div>
      <p>
        In this course, we will learn {whatWeWillLearn} by building TaskOPedia!
        <br />
        Total Lectures - {totalLectures}
      </p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      <div className="container row">Students Enrolled</div>
      <Student fullName="Peter Parker" workExperience={47}>
        <StudentReview />
      </Student>
      <Student fullName="Clarke Kent" workExperience={70}>
        <StudentReview />
      </Student>
      <Student fullName="Tony Stark" workExperience={57} />
    </div>
  );
}

export default MainBody;