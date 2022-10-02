import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./style/Home.css";
import DownNavbar from "../Navbar/DownNavbar";
import Footer from "../Footer/Footer";
import { AppContext } from "../AuthContext/Authcontext";


function Home() {
  // GO TO NEXT PAGE  ******************************************
  const { authState, loginUser } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="navbardivfix">
        <Navbar />
      </div>

      {/* ************************************************************** */}

      <div className="topdiv">
        <div className="topdivflex">
          <div className="fisrtdivh1">
            <h1
              style={{
                fontSize: "80px",
                fontWeight: "600",
                lineHeight: "90px",
              }}
            >
              Connect everything. Achieve anything.
            </h1>
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "30px",
                marginTop: "5px",
              }}
            >
              Accelerate work and unlock potential with powerful apps that
              connect your data, workflows and teams. This is how.
            </h3>

            <button onClick={() => navigate("/signup")} className="btnsignup">
              Sign up for free
            </button>
          </div>

          <div className="videodiv">
            <video className="video" width="700px" autoPlay loop muted>
              <source
                src="https://videos.ctfassets.net/wl95ljfippl8/4mknj7oTndciGSdFtTDjZq/adcfe61bb0700d98af81f1f47e72a787/Homepage_Brand_Video_May_2022_V2.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </div>
      </div>

      <div
        style={{
          // border: "1px solid red",
          height: "100px",
        }}
      >
        <div
          style={{
            width: "1200px",
            display: "flex",
            margin: "auto",
            gap: "80px",
            justifyContent: "center",
          }}
        >
          <img
            className="imglogo"
            src="http://photos.prnewswire.com/prnfull/20070907/NYF044LOGO"
            alt="COLE HAAN"
          />
          <img
            className="imglogo"
            src="https://www.clipartmax.com/png/middle/196-1965267_medium-logo-medium.png"
            alt=""
          />
          <img
            className="imglogo"
            src="https://s27.q4cdn.com/708721433/files/images/new-logos/image-(10).png
         "
            alt="EXPEDIA"
          />
          <img
            className="imglogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158
         "
            alt=""
          />
          <img
            className="imglogo"
            src="https://www.pngfind.com/pngs/m/680-6800364_logo-time-magazine-png-transparent-png.png
         "
            alt="TIME"
          />
          <img
            className="imglogo"
            src="https://www.citypng.com/public/uploads/preview/-11597191761n5ghafjnrt.png
         "
            alt=""
          />
        </div>
      </div>

      <div
        className="createName"
        style={{
          backgroundColor: "whitesmoke",
          height: "400px",
          // display: "flex",
          margin: "auto",
          // gap: "80px",
          justifyContent: "center",
          padding: "100px",
        }}
       >
        <h1
          style={{
            width: "800px",
            margin: "auto",
            fontSize: "80px",
            fontWeight: "600",
            lineHeight: "90px",
            textAlign: "center",
          }}
        >
          Create solutions that mirror your business
        </h1>
        <h3
          style={{
            width: "800px",
            margin: "auto",
            fontSize: "30px",
            fontWeight: "600",
            lineHeight: "30px",
            marginTop: "5px",
            textAlign: "center",
          }}
        >
          Move work forward faster with no-code apps that perfectly match your
          team’s agility and scale.
        </h3>
       </div>
       <div className="topdiv">
        <div className="topdivflex">
          <div className="fisrtdivh1">
            <h1
              style={{
                fontSize: "80px",
                fontWeight: "600",
                lineHeight: "90px",
              }}
            >
              Unite every stream of work
            </h1>
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "30px",
                marginTop: "5px",
              }}
            >
              Create a single source of truth that’s tailored precisely to how
              your teams work. Include everything you need, nothing you don’t.
            </h3>
          </div>

          <div className="videodiv">
            <video className="video" width="700px" autoPlay loop muted>
              <source
                src="https://static.airtable.com/images/homescreen/Homepage_Anim_02_Unite_FINAL.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </div>
       </div>

       <div className="topdiv">
        <div className="topdivflex">
          <div className="videodiv">
            <video className="video" width="700px" autoPlay loop muted>
              <source
                src="https://static.airtable.com/images/homescreen/Homepage_Anim_03_TurnInformation_FINAL.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>

          <div className="fisrtdivh1">
            <h1
              style={{
                fontSize: "80px",
                fontWeight: "600",
                lineHeight: "90px",
              }}
            >
              Interface with work in a new way
            </h1>
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "30px",
                marginTop: "5px",
              }}
            >
              Create custom interfaces that give each and every teammate the
              relevant information they need, and a simple way to take action.
            </h3>
          </div>
        </div>
      </div>

      <div className="topdiv">
        <div className="topdivflex">
          <div className="">
            <h1
              style={{
                fontSize: "80px",
                fontWeight: "600",
                lineHeight: "90px",
              }}
            >
              Bring all your data together
            </h1>
          </div>

          <div className="fisrtdivh1">
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "30px",
                marginTop: "5px",
              }}
            >
              All your information. Always up to date. At your fingertips. Keep
              everything in sync across your organization.
            </h3>
          </div>
        </div>
        </div>

        <div className="topdiv">
        <div className="topdivflex">
          <img
            style={{
              width: "1000px",
              height: "700px",
              margin: "auto",
            }}
            src="https://static.airtable.com/images/homescreen/homepage-sync.jpg
          "
            alt=""
          />
        </div>
        </div>

        <div className="topdiv">
        <div className="topdivflex">
          <div className="fisrtdivh1">
            <h1
              style={{
                fontSize: "80px",
                fontWeight: "600",
                lineHeight: "90px",
              }}
            >
              Get started quickly
            </h1>
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "30px",
                marginTop: "5px",
              }}
            >
              Begin building on day one. Airtable’s pre-made templates and
              intuitive design help you tackle even your most complex needs,
              right away.
            </h3>
          </div>
          <div className="videodiv">
            <video className="video" width="700px" autoPlay loop muted>
              <source
                src="https://static.airtable.com/images/homescreen/Homepage_Anim_05_SeeValueFast_FINAL.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </div>
        </div>

        <div className="topdiv">
        <div className="topdivflex">
          <div className="videodiv">
            <img
              style={{
                width: "800px",
                height: "600px",
                margin: "auto",
              }}
              src="https://static.airtable.com/images/homescreen/homepage-apps-dashboard.jpg
           "
              alt=""
            />
          </div>

          <div className="fisrtdivh1">
            <h1
              style={{
                fontSize: "80px",
                fontWeight: "600",
                lineHeight: "90px",
              }}
            >
              Transform how teams work at scale
            </h1>
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "30px",
                marginTop: "5px",
              }}
            >
              Discover deep integrations, advanced extensibility, expert
              support—everything your organization needs to reach new heights.
            </h3>
          </div>
        </div>
        </div>

        <div className="topdiv">
        <div className="topdivflex">
          <div className="">
            <h1
              style={{
                fontSize: "80px",
                fontWeight: "600",
                lineHeight: "90px",
              }}
            >
              Trusted by teams from all industries
            </h1>
          </div>

          <div className="fisrtdivh1">
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "30px",
                marginTop: "5px",
              }}
            >
              Read all
            </h3>
          </div>
        </div>
        </div>

        <div
        className="topdiv"
        style={{
          marginTop: "0px",
        }}
        >
        <div className="topdivflex">
          <div
            className="videodiv"
            style={{
              marginTop: "0px",
            }}
          >
            <img
              style={{
                width: "600px",
                height: "620px",
              }}
              src="https://static.airtable.com/images/homescreen/homepage-bakerhughes-portrait.jpg
           "
              alt=""
            />
          </div>

          <div className="fisrtdivh1">
            <h1
              style={{
                fontSize: "25px",
                fontWeight: "600",
                lineHeight: "40px",
              }}
            >
              Baker Hughes <br />
              <br />
              “A business transformation is really just a series of smaller
              changes rolling out one after the other. It’s about getting the
              right information to people when they need it. What started as an
              Airtable calendar very quickly became the solution that we use to
              manage everything.”
            </h1>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "30px",
                marginTop: "5px",
              }}
            >
              Stephanie Hartgrove <br />
              VP of Global Communications, Baker Hughes Watch video →
            </h3>
          </div>
        </div>
        </div>
        <div className="topdiv">
        <div
          className="fisrtdivh1"
          style={{
            margin: "auto",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "25px",
              fontWeight: "600",
              lineHeight: "40px",
            }}
          >
            300,000+ innovative companies use Airtable every day. Join them.
            Sign up for free
          </h1>
          <button onClick={() => navigate("/signup")} className="btnsignup">
            Sign up for free
          </button>
          <h3>No credit card needed</h3>
        </div>
      </div>

      <DownNavbar />

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
