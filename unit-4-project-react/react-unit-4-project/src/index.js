import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import Authcontext from "./AuthContext/Authcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <ChakraProvider>
  <BrowserRouter>
    <Authcontext>
      <App />
    </Authcontext>
  </BrowserRouter>
  //   </ChakraProvider>
);
