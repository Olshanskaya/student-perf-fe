import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "reactstrap";
import ViewCourse from "./ViewCourse.js";

export default class Course extends Component {
  render() {
    return (
      <div>
        <ViewCourse />
      </div>
    );
  }
}