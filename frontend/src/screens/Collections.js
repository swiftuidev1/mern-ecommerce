import React from "react";
import {useLocation} from "react-router-dom";
import {Container} from "react-bootstrap";
import {AppNavigation} from "../components/AppNavigation";
import {AppProductCard} from "../components/AppProductCard";

export const Collections = () => {
  const location = useLocation();

  // pathname [/collections, /collections/clothes, /collections/clothes/others, /collections/clothes/t-shirts,
  // /collections/clothes/jeans, /collections/clothes/, /collections/accessories, /collections/accessories/phone-cases
  // /collections/accessories/others]

  return (
    <>
      <AppNavigation />
      <Container>
        <AppProductCard />
      </Container>
    </>
  );
};