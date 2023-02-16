import React, { useState, Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "reactstrap";
import axios from 'axios';

const ViewMe = () => {
  const [userEmail, setUserEmail] = useState("");
  const [student, setStudent] = useState([]);

  const handleSetUserEmail = (event) => {
    setUserEmail(event.target.value);
  };
  const API_URL = 'http://localhost:8080/home';

  const findStudent = (e) => {
    e.preventDefault();
    axios.get(API_URL+ "/student?"+"email="+userEmail)
      .then((response) => setStudent(response.data));
    console.log(student);
    // window.location.reload(true);
  };

  return (
    <div>
      <div className="container-fluid">
        <input
          type="string"
          placeholder="Название"
          onChange={handleSetUserEmail}
        />
        <br />
        <br />
        <Link to="/">
          <Button className="btn btn-primary" onClick={findStudent}>
            Поиск студента
          </Button>
        </Link>
        <br />
        <br />
        
        <div className="form-group">
          <label>
            <strong>Имя: &emsp; </strong>
          </label>
          {student.firstName}
          <br />
          <label>
            <strong>Фамилия: &emsp; </strong>
          </label>
          {student.lastName}
          <br />
          <label>
            <strong>Отчество: &emsp; </strong>
          </label>
          {student.patronymic}
          <br />
          <label>
            <strong>Название академического плана: &emsp; </strong>
          </label>
          { (student.academicPlan) != null ? student.academicPlan.name : "" }
          <br />
          <label>
            <strong>Список всех предметов: &emsp; </strong>
          </label>

 
          <ul className="list-group">
          {(student.academicPlan) != null && (student.academicPlan.courses) != null ? student.academicPlan.courses.map((course, index) => (
              <li>
                {course.name}
              </li>
            )): ""}
          </ul>

        <label>
            <strong>Список сданных предметов: </strong>
          </label>

        <ul className="list-group1">
          {(student.course) != null ? student.course.map((course, index) => (
              <li>
                {course.name} 
                <label>
                &emsp; с оценкой: &emsp; 
            {course.mark}
          </label>
              </li>
            )): ""}
        </ul>     

        </div>
        
        <br />
        <br />
        <Link to="/auth">
          <Button className="btn btn-primary">
            Войти как администратор
          </Button>
        </Link>
        <br />
        <br />

      </div>
    </div>
  );
};

export default ViewMe;
