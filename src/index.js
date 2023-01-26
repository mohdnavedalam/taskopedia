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

  return (
    <div>
      <p>In this course, we will learn react js by building TaskOPedia!</p>
      <p>
        In this course, we will learn {whatWeWillLearn} by building TaskOPedia!
      </p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
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
    <Footer />
  </div>
);