import React, { useState, Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "reactstrap";
import axios from 'axios';

const ViewCourse = () => {
  const [courses, setCourses] = useState([]);
  const [user_passw, setPsw] = useState("");
  const [user_log, setLogin] = useState("");

  const API_URL = 'http://localhost:8080/admin';

  const findPlans = (e) => {
    e.preventDefault();
    setPsw(JSON.parse(localStorage.getItem('user_password')))
    setLogin(JSON.parse(localStorage.getItem('user_login')))
    console.log(user_passw);
    console.log(user_log);
    axios.get(API_URL+ "/course",  {auth: {
        username: user_log,
        password: user_passw
      }})
      .then((response) => setCourses(response.data));
    console.log(courses);
    // window.location.reload(true);
  };

  const logOut = (e) => {
    localStorage.removeItem("user_password");
    localStorage.removeItem("user_login");
  };

  return (
    <div>
      <div className="container-fluid">
      <br />
        <br />   
        <Link to="/plan">
        <Button className="btn btn-primary1" onClick={findPlans}>
            Показать все курсы
        </Button>
        </Link>    
        <br /> 
        <br />
        <br />   
        <Link to="/student">
        <Button className="btn btn-primary2">
            Студенты
        </Button>
        </Link>    
        <br /> 
        <Link to="/plan">
        <Button className="btn btn-primary3">
            Академические планы
        </Button>
        </Link>  
        <br />    
         <br /> 

         <br /> 
        <Link to="/">
        <Button className="btn btn-primary3" onClick={logOut}>
            Выйти
        </Button>
        </Link>  
        <br />    
         <br /> 


        <ul className="list-group1">
          {(courses) != null ? courses.map((pl, index) => (
              <li>
                {pl.name} 
              </li>
            )): ""}
        </ul>     

      </div>
    </div>
  );
};

export default ViewCourse;