import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterSearch } from "../Functions/Functions";




const Navbarrr = () => {
  
    const dispatch = useDispatch()
    const all = useSelector((storeData)=>{
      return storeData.all
  })
  // console.log(all);
  const [searchMovie, setSearchMovie] = useState("")
  return (
    <>
      <div className="Navbarrr">
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <Link to='/'>Movie App</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <Link to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link href="#action1">
              <Link to='/popular'>Popular</Link>
            </Nav.Link>
            <Nav.Link href="#action1">
              <Link to='/toprated'>Top Rated</Link>
            </Nav.Link>
            <Nav.Link href="#action1">
              <Link to='/trending'>Trending</Link>
            </Nav.Link>
            <Nav.Link href="#action1">
              <Link to='/upcoming'>Up Coming</Link>
            </Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchMovie}
              onChange={((e)=>{
                setSearchMovie(e.target.value)
              })}
            />
            <Link to='/search'>
            <Button variant="outline-success" onClick={(()=>{
              filterSearch(dispatch,all,searchMovie)
            })}>Search</Button>
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
