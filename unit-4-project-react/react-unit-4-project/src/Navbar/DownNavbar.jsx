import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";

import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";


function DownNavbar() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "1200px",
        margin: "auto",
      }}
    >
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <img
            className="navbar-brand"
            onClick={() => navigate("/")}
            // className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Airtable_Logo.svg/245px-Airtable_Logo.svg.png?20190330165554"
            alt=""
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-3 mb-lg-0">
              <li className="nav-item">
                <button
                  onClick={() => navigate("/product")}
                  className="nav-link active"
                  aria-current="page"
                >
                  {" "}
                  Product
                </button>
              </li>

              <li className="nav-item">
                <button
                  onClick={() => navigate("/solution")}
                  className="nav-link active"
                >
                  {" "}
                  Solution
                </button>
              </li>

              <li className="nav-item">
                <button
                  onClick={() => navigate("/pricing")}
                  className="nav-link active"
                >
                  {" "}
                  Pricing
                </button>
              </li>

              <li className="nav-item">
                <button
                  onClick={() => navigate("/enterprise")}
                  className="nav-link active"
                >
                  {" "}
                  Enterprise
                </button>
              </li>

              <li className="nav-item">
                <button
                  onClick={() => navigate("/resources")}
                  className="nav-link active"
                >
                  {" "}
                  Resources
                </button>
              </li>
            </ul>
            {/* </div> */}

            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-3 mb-lg-0">
                <li className="nav-item">
                  <button
                    onClick={() => navigate("/#")}
                    className="nav-link active"
                  >
                   <IoLogoTwitter/>
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    
                    onClick={() => navigate("/#")}
                    className="nav-link active"
                  >
                   <AiFillLinkedin/>
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    onClick={() => navigate("/#")}
                    className="nav-link active"
                  >
                    <BsFacebook />
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => navigate("/#")}
                    className="nav-link active"
                  >
                    <GrInstagram />
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => navigate("/#")}
                    className="nav-link active"
                  >
                    <AiFillYoutube />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DownNavbar;
