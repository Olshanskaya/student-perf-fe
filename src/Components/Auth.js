import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "reactstrap";
import ViewAuth from "./ViewAuth.js";

export default class Auth extends Component {
  render() {
    return (
      <div>
        <ViewAuth />
      </div>
    );
  }
}