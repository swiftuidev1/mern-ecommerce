import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "./screens/Home";
import {About} from "./screens/About";
import {Terms} from "./screens/Terms";
import {Cart} from "./screens/Cart";
import {Checkout} from "./screens/Checkout";
import {PreCheckout} from "./screens/PreCheckout";
import {Collections} from "./screens/Collections";
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/terms"} element={<Terms />} />
      <Route path={"/cart"} element={<Cart />} />
      <Route path={"/pre-checkout"} element={<PreCheckout />} />
      <Route path={"/collections/*"} element={<Collections />} />
      <Route path={"/checkout"} element={<Checkout />} />
    </Routes>
  );
}
export default App;