import React, { Component } from "react";
import { Routes, Link, BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Auth from "./Components/Auth";
import Plan from "./Components/Plan";
import Student from "./Components/Student";
import Course from "./Components/Course";


class App extends Component {
  render() {
    return (         
      <div>
      <div className="container mt-3">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/auth" element={<Auth />} /> 
          <Route path="/plan" element={<Plan />} /> 
          <Route path="/student" element={<Student />} /> 
          <Route path="/course" element={<Course />} />  
        </Routes>
        </BrowserRouter>
      </div>
    </div>
    );
  }
}

export default App;
