// import React from 'react';  ----- Not needed in React 18
import React from "react";
import ReactDOM from "react-dom/client";
import "../src/CSS/style.css";
import Header from "./Components/Layout/Header";
import Student from "./Components/Students";
import Footer from './Components/Layout/Footer';
import MainBody from './Components/MainBody';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div className="dark-mode">
      <div>
        <Header />
        <MainBody />        
        <Footer />
      </div>
    </div>
  </React.StrictMode>
);
