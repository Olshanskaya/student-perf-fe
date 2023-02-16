import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "reactstrap";
import ViewMe from "./ViewMe.js";

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <ViewMe />
      </div>
    );
  }
}