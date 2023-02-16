import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Routes, Route, Link } from "react-router-dom";

class BasicExampleForm extends Component {

    
// getStudent() {
//     try {
//       axios
//         .get("http://localhost:8080/home/student?email=email1", {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: auth,
//           },
//         })
//         .then((response) => {
//           this.setState({ student: response.data });
//         });
//     } catch (err) {
//       console.log(err);
//     }
//   }


render() {
  return ( <>     

    <Form>
    {/* <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
      <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
        </li>
      </Button>
      </div> */}


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Просмотреть успеваемость.
        </Form.Text>
      </Form.Group >
      <Button variant="primary" type="submit">
        Найти
        {/* onClick={() => this.setState({ addModalShow: true })} */}
      </Button>

    </Form>
    </>
  );
}
}
