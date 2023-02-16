import React, { useState, Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "reactstrap";
import axios from 'axios';

const ViewAuth = () => {
  const [userEmail, setUserEmail] = useState("");
  const [student, setStudent] = useState([]);

  const handleSetUserLogin = (event) => {
    localStorage.setItem("user_login", JSON.stringify(event.target.value));
    console.log(JSON.parse(localStorage.getItem('user_login')));
  };

  
  const handleSetUserPassword = (event) => {
    localStorage.setItem("user_password", JSON.stringify(event.target.value));
    console.log(JSON.parse(localStorage.getItem('user_password')));
  };

  return (
    <div>
      <div className="container-fluid">
        <input
          type="string"
          placeholder="Login"
          onChange={handleSetUserLogin}
        />
        <br />
        <input
          type="string"
          placeholder="Пароль"
          onChange={handleSetUserPassword}
        />
        <br />
        <br />
        <Link to="/plan">
          <Button className="btn btn-primary" >
            Войти
          </Button>
        </Link>
        <br />
        <br />   
        <Link to="/">
          <Button className="btn btn-primary">
            Назад
        </Button>
        </Link>    

      </div>
    </div>
  );
};

export default ViewAuth;