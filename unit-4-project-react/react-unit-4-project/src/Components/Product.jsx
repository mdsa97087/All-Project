import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import AnotherNavbar from "../Navbar/AnotherNavbar";
import DownNavbar from "../Navbar/DownNavbar";
import Navbar from "../Navbar/Navbar";
import "./style/Product.css";
import "./style/Home.css";

function Product() {
  return (
    <>
      <AnotherNavbar />

      <div className="productbigdiv">
        <div className="Scrolldiv">
          {/* <input type="text" placeholder="Search" /> */}
          <div className="scroll1">
            <p>Content production</p>
            <p>Featured</p>
            <p>Creative</p>
            <p>Event Planning</p>
            <p>Everyday Life</p>
            <p>HR & Recruiting</p>
            <p>Legal</p>
            <p>Local Business</p>
            <p>Content production</p>
            <p>Featured</p>
            <p>Creative</p>
            <p>Event Planning</p>
            <p>Legal</p>
            <p>Local Business</p>
            <p>Content production</p>
            <p>Featured</p>
            <p>Creative</p>
            <p>Event Planning</p>
            <p>Local Business</p>
            <p>Content production</p>
            <p>Featured</p>
            <p>Creative</p>
            <p>Event Planning</p>
            <p>Local Business</p>
            <p>Content production</p>
            <p>Featured</p>
            <p>Creative</p>
            <p>Event Planning</p>
          </div>
        </div>

        <div className="imgdivsame">
          <div className="same1">
            <div className="samefirst">
              <div className="imgback">
                <h3 className="h31">Content Calender </h3>
              </div>
            </div>

            <div className="samefirst1">
              <div className="imgback1">
                <h3 className="h31">Project Tracker</h3>
              </div>
            </div>
            <div className="samefirst2">
              <div className="imgback2">
                <h3 className="h31">Marketing Tracking</h3>
              </div>
            </div>
          </div>

          <div className="same2">
            <div className="samesecond21">
              <div className="imgback21">
                <h4 className="h31">Product Teams</h4>
              </div>
            </div>
            <div className="samesecond22">
              <div className="imgback22">
                <h4 className="h31">Product Catalog</h4>
              </div>
            </div>
            <div className="samesecond23">
              <div className="imgback23">
                <h4 className="h31">Product Launch</h4>
              </div>
            </div>
            <div className="samesecond24">
              <div className="imgback24">
                <h4 className="h31">Bug Tracker</h4>
              </div>
            </div>
          </div>
          <div className="same3">
            <div className="samesecond31">
              <div className="imgback31">
                <h4 className="h31">Event Planning</h4>
              </div>
            </div>
            <div className="samesecond32">
              <div className="imgback32">
                <h4 className="h31">User Reserch</h4>
              </div>
            </div>
            <div className="samesecond33">
              <div className="imgback33">
                <h4 className="h31">Simple Applicant</h4>
              </div>
            </div>
            <div className="samesecond34">
              <div className="imgback34">
                <h4 className="h31">Digital Video</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          // border: "1px solid red",
          height: "100px",
          marginTop: '200px',
          marginBottom: '0px'
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
        style={{
          marginTop: "180px",
        }}
      >
        <DownNavbar />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Product;
