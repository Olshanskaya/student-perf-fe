import React, { useState, Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "reactstrap";
import axios from 'axios';

const ViewStudent = () => {
  const [students, setPlans] = useState([]);
  const [user_passw, setPsw] = useState("");
  const [user_log, setLogin] = useState("");

  const API_URL = 'http://localhost:8080/admin';

  const findPlans = (e) => {
    e.preventDefault();
    setPsw(JSON.parse(localStorage.getItem('user_password')))
    setLogin(JSON.parse(localStorage.getItem('user_login')))
    console.log(user_passw);
    console.log(user_log);
    axios.get(API_URL+ "/student",  {auth: {
        username: user_log,
        password: user_passw
      }})
      .then((response) => setPlans(response.data));
    console.log(students);
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
            Показать всеx Студентов
        </Button>
        </Link>    
        <br /> 
        <br />
        <br />   
        <Link to="/plan">
        <Button className="btn btn-primary2">
            Академические планы
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
         <Link to="/">
        <Button className="btn btn-primary3">
            Проверить успеваемость конкретного студента
        </Button>
        </Link> 

                 <br /> 
        <Link to="/">
        <Button className="btn btn-primary3" onClick={logOut}>
            Выйти
        </Button>
        </Link>  
        <br />    
         <br />  


        <ul className="list-group1">
          {(students) != null ? students.map((s, index) => (
              <li>
                Имя: {s.firstName} 
                <br /> 
                Фамилия: {s.lastName} 
                <br /> 
                Отчество: {s.patronymic} 
                <br /> 
                Почта: {s.email} 
                <br /> 
                Академический план: {(s.academicPlan) != null ? s.academicPlan.name : "Не назначен"}
                <br /> 
              </li>
            )): ""}
        </ul>     

      </div>
    </div>
  );
};

export default ViewStudent;