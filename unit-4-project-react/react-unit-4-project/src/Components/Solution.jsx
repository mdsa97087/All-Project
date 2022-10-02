import React from "react";
import Footer from "../Footer/Footer";
import AnotherNavbar from "../Navbar/AnotherNavbar";
import DownNavbar from "../Navbar/DownNavbar";
import "./style/Solution.css";
import "./style/Home.css";

function Solution() {
  return (
    <>
      <AnotherNavbar />
      <div className="anotherdiv">
        <h1
          style={{
            fontSize: '50px',
            fontWeight: '700'
          }}
        >Choose the right plan for you</h1>

        <div className="bigdivsolution">
          <div className="smalldivsolution">
            <div className="centerdiv">
              <div className="middlediv">
                <h3>Free </h3>
                <h4>
                  Plus Pro Enterprise For individuals or very small teams just
                  getting started with Airtable
                </h4>
                <h1>Free</h1>
              </div>
              <button className="buttontype">Choose Free</button>
              <div className="afterbuttondiv">
                <h4>Free Includes : </h4>
                <h5>Up to 5 creators or editors</h5>
                <h5>Unlimited bases</h5>
                <h5>Unlimited commenter & read-only users</h5>
                <h5>1 extension per base</h5>
                <h5>1 sync integration</h5>
                <h5>1,200 records per base</h5>
                <h5>2GB of attachments per base</h5>
              </div>
            </div>
          </div>
          <div
            className="smalldivsolution"
            style={{
              backgroundColor: "#FF9494",
            }}
          >
            <div className="centerdiv">
              <div className="middlediv">
                <h3>Pro </h3>
                <h4>
                  For teams looking to create a single source of truth to manage
                  their workflows and processes
                </h4>
                <h1>$20</h1>
                <h5>$24 billed monthly</h5>
              </div>
              <button className="buttontype">Choose Pro</button>
              <div className="afterbuttondiv">
                <h4>Everything in Plus, plus: </h4>
                <h5>Up to 5 creators or editors</h5>
                <h5>Unlimited bases</h5>
                <h5>Unlimited commenter & read-only users</h5>
                <h5>1 extension per base</h5>
                <h5>1 sync integration</h5>
                <h5>1,200 records per base</h5>
                <h5>2GB of attachments per base</h5>
              </div>
            </div>
          </div>
          <div
            className="smalldivsolution"
            style={{
              backgroundColor: "#B1E1FF",
            }}
          >
            <div className="centerdiv">
              <div className="middlediv">
                <h3>Plus </h3>
                <h4>
                  For teams and companies who need to create workflows &
                  extensions to run their most important processes across their
                  orgs
                </h4>
                <h1>$10</h1>
                <h5>$12 billed monthly</h5>
              </div>
              <button className="buttontype">Choose Plus</button>
              <div className="afterbuttondiv">
                <h4>Everything in Free, plus: </h4>
                <h5>Up to 5 creators or editors</h5>
                <h5>Unlimited bases</h5>
                <h5>Unlimited commenter & read-only users</h5>
                <h5>1 extension per base</h5>
                <h5>1 sync integration</h5>
                <h5>1,200 records per base</h5>
                <h5>2GB of attachments per base</h5>
                <h5>Unlimited commenter & read-only users</h5>
                <h5>1 extension per base</h5>
              </div>
            </div>
          </div>
          <div
            className="smalldivsolution"
            style={{
              backgroundColor: "#5F7161",
              color: "white",
            }}
          >
            <div className="centerdiv">
              <div className="middlediv">
                <h3>Enterprise </h3>
                <h4>
                  For departments and organizations who have advanced
                  customization, scale, security, control and support needs
                </h4>

                <h1>$10</h1>
                <h5>$12 billed monthly</h5>
              </div>

              <button className="buttontype">Choose sales</button>

              <div className="afterbuttondiv">
                <h4>Everything in Free, plus: </h4>
                <h5>Up to 5 creators or editors</h5>
                <h5>Unlimited bases</h5>
                <h5>Unlimited commenter & read-only users</h5>
                <h5>1 extension per base</h5>
                <h5>1 sync integration</h5>
                <h5>1,200 records per base</h5>
                <h5>2GB of attachments per base</h5>
                <h5>Unlimited commenter & read-only users</h5>
                <h5>1 extension per base</h5>
                <h5>1 sync integration</h5>
                <h5>1,200 records per base</h5>
                <h5>2GB of attachments per base</h5>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            // border: "1px solid red",
            height: "100px",
            marginTop: '150px',
            marginBottom: '0px'
          }}
        >
          <div
            style={{
              // marginTop:'200px',
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
        <div style={{
          marginTop: '120px'
        }}>
          <DownNavbar />
        </div>
        <Footer />
      </div>

    </>
  );
}

export default Solution;
