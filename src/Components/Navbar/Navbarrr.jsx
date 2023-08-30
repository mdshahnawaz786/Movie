import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { filterSearch } from "../Functions/Functions";
import './navStyling.css'
import movieIcon from "../../logo/logo.png"


const Navbarrr = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const all = useSelector((storeData) => {
    return storeData.all;
  });
  const [searchMovie, setSearchMovie] = useState("");

  
  return (
    <>
      <div className="Navbarrr">
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand href="#">
              <Link to="/">
                <img height={40} width={40} src={movieIcon} alt="movieIcon" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                
                <Nav.Link href="#action1">
                  <NavLink to='/'>Home</NavLink>
                </Nav.Link>
                <Nav.Link href="#action1">
                  <NavLink to="/popular">Popular</NavLink>
                </Nav.Link>
                <Nav.Link href="#action1">
                  <NavLink to="/toprated">Top Rated</NavLink>
                </Nav.Link>
                <Nav.Link href="#action1">
                  <NavLink to="/trending">Trending</NavLink>
                </Nav.Link>
                <Nav.Link href="#action1">
                  <NavLink to="/upcoming">Up Coming</NavLink>
                </Nav.Link>
                <Nav.Link href="#action1">
                  <NavLink to="/comedy">Comedy</NavLink>
                </Nav.Link>
                <Nav.Link href="#action1">
                  <NavLink to="/horror">Horror</NavLink>
                </Nav.Link>
                <Nav.Link href="#action1">
                  <NavLink to="/action">Action</NavLink>
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={searchMovie}
                  onChange={(e) => {
                    setSearchMovie(e.target.value);
                  }}
                />
                <Link to="/search">
                  <Button
                    variant="outline-success"
                    onClick={() => {
                      
                      
                        filterSearch(dispatch, all, searchMovie);
                      
                     
                    }}
                  >
                    Search
                  </Button>
                </Link>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Navbarrr;
