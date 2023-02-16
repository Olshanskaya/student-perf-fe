import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "reactstrap";
import ViewStudent from "./ViewStudent.js";

export default class Student extends Component {
  render() {
    return (
      <div>
        <ViewStudent />
      </div>
    );
  }
}