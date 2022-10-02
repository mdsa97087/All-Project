import { color } from "@chakra-ui/react";
import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import "./style/Signup.css";
import Home from "./Home";
import {AppContext} from "../AuthContext/Authcontext"


function SignIn() {
  const [email, setEmaillog] = useState("");
  const [password, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);
  const {authState, loginUser } = useContext(AppContext);

  function handleSubmit(e) {
    e.preventDefault();

    let mail = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");

    if (!email || !password) {
      setFlag(true);
      console.log("Emapty");
    } else if (password !== pass || email !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
      loginUser(true)
    }
  }

  return (
    <div className="buller">
      {home ? (
        <div className="bigdiv">
          <div className="imgdiv">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Airtable_Logo.svg/245px-Airtable_Logo.svg.png?20190330165554
              "
              alt=""
            />
          </div>
          {flag && (
            <h4
              style={{
                color: "red",
                textAlign: "center",
              }}
            >
              Please Fill Correct Data
            </h4>
          )}

          <form onSubmit={handleSubmit}>
            <div className="textdiv">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h1>Sign in</h1>
                </div>
                <div style={{}}>
                  <span>or</span>
                  <Link to="/signup">Create Account</Link>
                </div>
              </div>

              <input
                type="text"
                style={{
                  padding: "2px",
                }}
                placeholder="Enter Email"
                onChange={(event) => setEmaillog(event.target.value)}
              />
              <h6>Password</h6>
              <input
                type="text"
                style={{
                  padding: "2px",
                }}
                placeholder="Enter Password"
                onChange={(event) => setPasswordlog(event.target.value)}
              />

              <button
                type="submit"
                style={{
                  border: "none",
                  background: "#47B5FF",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                Sign In
              </button>
            </div>
          </form>

          <p
            style={{
              textAlign: "center",
              margin: "auto",
            }}
          >
            ------------------------or----------------------
          </p>

          <div
            className="downdiv"
            style={{
              bottom: "-130px",
            }}
          >
            <h5 style={{ color: "white" }}>
              Sign up today and try the Pro plan for free
            </h5>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default SignIn;
