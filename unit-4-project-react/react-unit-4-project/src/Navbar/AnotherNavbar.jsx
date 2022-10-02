import React, { useContext } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { AppContext } from "../AuthContext/Authcontext";

function AnotherNavbar() {
  const navigate = useNavigate();
  const { authState, logoutUser } = useContext(AppContext);

  const logout = () => {
    logoutUser(false);
  };

  return (
    <div className="navbarmain12">
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
                    style={{
                      border: "1px solid rgb(60, 52, 52)",
                      borderRadius: "8px",
                    }}
                    onClick={() => navigate("/contactsales")}
                    className="nav-link active"
                  >
                    Contact Sales
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => navigate("/#")}
                    className="nav-link active"
                  >
                    Base
                  </button>
                </li>

                <li
                  className="nav-item"
                  style={{
                    margin: "0 5px 0 40px",
                  }}
                >
                  <button
                    className="nav-link active"
                    style={{
                      padding: "0",
                    }}
                    onClick={logout}
                  >
                    <img
                      style={{
                        height: "40px",
                        width: "50px",
                        border: "1px solid",
                        // margin: "0 5px 0 40px",
                      }}
                      src="https://cdn3d.iconscout.com/3d/premium/preview/logout-5611736-4696509@0.png?w=0&h=700&f=jpeg
"
                      alt=""
                    />
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

export default AnotherNavbar;
