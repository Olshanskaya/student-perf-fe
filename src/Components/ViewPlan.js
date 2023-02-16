import React, { useState, Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "reactstrap";
import axios from 'axios';

const ViewPlan = () => {
  const [plans, setPlans] = useState([]);
  const [user_passw, setPsw] = useState("");
  const [user_log, setLogin] = useState("");

  const API_URL = 'http://localhost:8080/admin';

  const findPlans = (e) => {
    e.preventDefault();
    setPsw(JSON.parse(localStorage.getItem('user_password')))
    setLogin(JSON.parse(localStorage.getItem('user_login')))
    console.log(user_passw);
    console.log(user_log);
    axios.get(API_URL+ "/plan",  {auth: {
        username: user_log,
        password: user_passw
      }})
      .then((response) => setPlans(response.data));
    console.log(plans);
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
        <br /> ``  
        <Link to="/plan">
        <Button className="btn btn-primary1" onClick={findPlans}>
            Показать все Академические планы
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
        <Link to="/course">
        <Button className="btn btn-primary3">
            Курсы
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
          {(plans) != null ? plans.map((pl, index) => (
              <li>
                {pl.name} 
                <label>
                 &emsp; с курсами: &emsp; 
                </label> 
                        <ul className="list-group2">
                            {(pl.courses) != null ? pl.courses.map((c, i) => (
                                <li>
                                {c.name}
                                </li>
                            )): ""}
                        </ul> 
              </li>
            )): ""}
        </ul>     

      </div>
    </div>
  );
};

export default ViewPlan;