import React from "react";
import ReactDOM from "react-dom";
import StudentForm from 'studentapp1/StudentForm';
import "./index.css";

const App = () => (
  <div className="container">
    <h2>Student 3 application</h2>
    <StudentForm/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
