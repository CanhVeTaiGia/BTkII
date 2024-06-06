import React from "react";

export default function Footer() {
  return (
    <>
      {/* footer section start */}
      <div className="footer_section">
        <div className="container">
          <div className="footer_location_text">
            <ul>
              <li>
                <img src="images/map-icon.png" />
                <span className="padding_left_10">
                  <a href="#">Loram Ipusm hosting web</a>
                </span>
              </li>
              <li>
                <img src="images/call-icon.png" />
                <span className="padding_left_10">
                  <a href="#">Call : +7586656566</a>
                </span>
              </li>
              <li>
                <img src="images/mail-icon.png" />
                <span className="padding_left_10">
                  <a href="#">demo@gmail.com</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <h2 className="useful_text">Useful link </h2>
              <div className="footer_menu">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="repair.html">Service</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h2 className="useful_text">Repair</h2>
              <p className="lorem_text">
                Lorem ipsum dolor sit amet, consectetur adipiscinaliqua
                Loreadipiscing{" "}
              </p>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h2 className="useful_text">social media</h2>
              <div className="social_icon">
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/fb-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/twitter-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/linkedin-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/youtub-icon.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <h1 className="useful_text">Our Repair center</h1>
              <p className="footer_text">
                Lorem ipsum dolor sit amet, consectetur
                adipiscinaliquaLoreadipiscing{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end info section */}
      {/* footer section end */}
      {/* copyright section start */}
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
            2019 All Rights Reserved. Design by{" "}
            <a href="https://html.design">Free html Templates</a> Distributed By{" "}
            <a href="https://themewagon.com">ThemeWagon</a>
          </p>
        </div>
      </div>
      {/* copyright section end */}
    </>
  );
}
