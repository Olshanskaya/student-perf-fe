import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "reactstrap";
import ViewPlan from "./ViewPlan.js";

export default class Plan extends Component {
  render() {
    return (
      <div>
        <ViewPlan />
      </div>
    );
  }
}