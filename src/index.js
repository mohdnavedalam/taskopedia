// import React from 'react';  ----- Not needed in React 18
import React from "react";
import ReactDOM from "react-dom/client";
import "../src/CSS/style.css";
import Header from "./Components/Header";
import Student from "./Components/Students";

const root = ReactDOM.createRoot(document.getElementById("root"));

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

function Footer() {
  return (
    <p style={{ color: "gray", backgroundColor: "black" }}>Happy Coding!</p>
  );
}
root.render(
  <React.StrictMode>
    <div className="container">
      <Header />
      <MainBody />
      <div className="row">Students Enrolled</div>
      <Student fullName="Peter Parker" programmingExperience={47}/>
      <Student fullName="Clarke Kent" programmingExperience={70}/>
      <Student fullName="Tony Stark" programmingExperience={57}/>
      <Footer />
    </div>
  </React.StrictMode>
);
