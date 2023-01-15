import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

export const AppNavigation = () => {
  return (
    <Navbar variant={"dark"} className="bgc-indigo-800" expand={"lg"}>
      <Container>
        <Navbar.Brand href={"/"}>ECOMMERCE</Navbar.Brand>
        <Navbar.Toggle aria-controls={"navbar-nav-id"} />
        <Navbar.Collapse id={"navbar-nav-id"}>
          <Nav className={"w-100 justify-content-around"}>
            <Nav.Link href={"/collections"}>All Collections</Nav.Link>
            <Nav.Link href={"/collections/clothes/t-shirts"}>T-shirts</Nav.Link>
            <Nav.Link href={"/collections/clothes/jeans"}>Jeans</Nav.Link>
            <Nav.Link href={"/collections/accessories/phone-cases"}>Phone Cases</Nav.Link>
            <Nav.Link href={"/sale"}>SALE<span className={"text-danger px-1"}>90% OFF</span></Nav.Link>
            <Nav.Link href={"/cart"}>CART <i className="bi bi-cart-fill"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};