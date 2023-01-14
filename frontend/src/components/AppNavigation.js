import React from "react";
import {Container, Navbar} from "react-bootstrap";

export const AppNavigation = () => {
  return (
    <Navbar variant={"dark"} bg={"dark"} expand={"lg"}>
      <Container>
        <Navbar.Brand href={"/"}>ECOMMERCE</Navbar.Brand>
        <Navbar.Toggle aria-controls={""} />

      </Container>
    </Navbar>
  );
};