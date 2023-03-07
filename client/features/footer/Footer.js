import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="top">
            <h3>About Us</h3>
            <p>
              We strive to deliver the highest quality camper vans to our customers.
              We are committed to building and producing reliable, durable, and efficient vehicles
              that offer you an unparalleled experience on the road. Our mission is to provide our
              customers with the opportunity to explore the world around them in comfort and style.
            </p>
          </div>
          <div className="both">
          <div className="left">
            <h3>Services</h3>
            <ul className="list-unstyled">
              <li><a href="https://vanlifecustoms.com/">Builds</a></li>
              <li><a href="https://www.contravans.com/camper-van-repair-services">Repairs</a></li>
              <li><a href="https://www.travellers-autobarnrv.com/car-deals-and-campervan-specials/">Specials</a></li>
            </ul>
          </div>
          <div className="right">
            <h3>Contact Us</h3>
            <ul className="list-unstyled">
              <li><a href="https://goo.gl/maps/DvgRkbHJwQ3Hfurw7">🏠 4295 Boulder Hwy, Las Vegas, NV 89121</a></li>
              <li><a href="https://voice.google.com/u/0/about">📱800-480-1111</a></li>
            </ul>
          </div>
        </div>
        </div>
        <div className="row">
          <div className="bottom">
            <div className="social-icons">
              <a href="lorem_ipsum_on_linkedin"><i className="fa fa-linkedin">sad</i></a>
              <a href="lorem_ipsum_on_fb"><i className="fa fa-facebook">dsa</i></a>
              <a href="lorem_ipsum_on_twitter"><i className="fa fa-twitter">sdaa</i></a>
              <a href="lorem_ipsum_live"><i className="fa fa-instagram">sdaasd</i></a>
              <a href="UCFt6TSF464J8K82xeA?"><i className="fa fa-youtube">adsas</i></a>
              <a href="lorem_ipsum_collections"><i className="fa fa-pinterest">adsasd</i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>&copy; Vanity Vans</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
