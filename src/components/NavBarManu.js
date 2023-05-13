import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faList,
  faPlus,
  faSearch,
  faUpload,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBarManu extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Restaurent</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#Home">
                <Link to="/">
                  {" "}
                  <FontAwesomeIcon icon={faHome} /> Home{" "}
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/create">
                  {" "}
                  <FontAwesomeIcon icon={faPlus} />
                  Create
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/list">
                  {" "}
                  <FontAwesomeIcon icon={faList} />
                  List
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/search">
                  {" "}
                  <FontAwesomeIcon icon={faSearch} />
                  Search
                </Link>
              </Nav.Link>
              {localStorage.getItem("login") ? (
                <Nav.Link href="#link">
                  <Link to="/logout">
                    <FontAwesomeIcon icon={faUser} /> Logout
                  </Link>
                </Nav.Link>
              ) : (
                <Nav.Link href="#link">
                  <Link to="/login">
                    <FontAwesomeIcon icon={faUser} /> Login
                  </Link>
                </Nav.Link>
              )}
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBarManu;
