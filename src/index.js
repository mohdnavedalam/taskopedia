// import React from 'react';  ----- Not needed in React 18
import ReactDOM from 'react-dom/client';
import '../src/CSS/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainHeader() {
  return <h1 className="heading1">REACT COURSE</h1>;
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray",
};
function SubHeader() {
  return <p style={subHeaderStyle}>This will be an exciting course.</p>;
}
function Header() {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
}

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
    </div>
  );
}

function Students() {
  const fullName = "Mohd Naved Alam";
  const programmingExperience = 4;
  return (
    <div className="container p-4">
      <div className='row'>
        Students Enrolled
      </div>
      <div className='row border'>
        <div className='col-2'>
          <img
            src={`https://ui-avatars.com/api/?name=${fullName}`}
            className='w-100'>
          </img>
        </div>
        <div className='col-10'>
          {fullName}
          <br />
          Programming Experience - {programmingExperience} years.
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <p style={{ color: "gray", backgroundColor: "black" }}>Happy Coding!</p>
  );
}
root.render(
  <div>
    <Header />
    <MainBody />
    <Students />
    <Footer />
  </div>
);