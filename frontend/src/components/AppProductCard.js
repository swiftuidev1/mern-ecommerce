import React, {useState} from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

export const AppProductCard = ({product}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card style={{width: hovered?"21rem":"20rem"}} className="mt-5 border-0 rounded-0" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Link to={`/product`} className="text-decoration-none text-black">
        <Card.Img style={{borderRadius: 0}} variant={"top"} className="border-bottom" src={"https://res.cloudinary.com/dtss9885i/image/upload/v1672897699/samples/ecommerce/shoes.png"} />
        <Card.Body>
          <Card.Title><b className="font-monospace">SOME SHOES</b></Card.Title>
        </Card.Body>
        <Link to={"/product"} className="btn bgc-indigo-800 text-white rounded-0 w-100 mt-3"><i className="bi bi-cart float-start"></i><code><i className="bi bi-currency-dollar"></i>149,50</code></Link>
      </Link>
    </Card>
  );
}