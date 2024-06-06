import { useEffect } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";

export default function Footer() {
    let param = useLocation();
    useEffect(() => {
        
    }, [...param.pathname.split('/')])
  return (
    <>
  {/* footer section start */}
  <div className="footer_section layout_padding">
    <div className="container">
      <div className="newsletter_section">
        <div className="newsletter_left">
          <div className="footer_logo">
            <img src="images/footer-logo.png" />
          </div>
        </div>
        <div className="newsletter_right">
          <h5 className="newsletter_taital">Subscribe Newsletter</h5>
          <div className="subscribe_main">
            <input
              type="text"
              className="mail_text"
              placeholder="Enter your email"
              name="text"
            />
            <div className="subscribe_bt">
              <a href="#">Subscribe</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_taital_main">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <h2 className="useful_text">About</h2>
            <p className="ipsum_text">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation u
            </p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h2 className="useful_text">Menus</h2>
            <div className="footer_links">
              <ul>
                <li>
                  <NavLink to=''>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                  <NavLink to='/service'>Services</NavLink>
                </li>
                <li>
                  <NavLink to='/pricing'>Pricing</NavLink>
                </li>
                <li>
                  <NavLink to='/contact'>Contact us</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h2 className="useful_text">Useful Link</h2>
            <div className="footer_links">
              <ul>
                <li>
                  <a href="#">Adipiscing</a>
                </li>
                <li>
                  <a href="#">Elit, sed do</a>
                </li>
                <li>
                  <a href="#">Eiusmod </a>
                </li>
                <li>
                  <a href="#">Tempor </a>
                </li>
                <li>
                  <a href="#">incididunt</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h2 className="useful_text">Contact us</h2>
            <div className="addres_link">
              <ul>
                <li>
                  <a href="#">
                    <img src="images/map-icon.png" />
                    <span className="padding_left_10">
                      No.123 Chalingt Gates
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/call-icon.png" />
                    <span className="padding_left_10">+01 1234567890</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/mail-icon.png" />
                    <span className="padding_left_10">demo@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h1 className="follow_text">Follow Us</h1>
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
                <img src="images/instagram-icon.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* footer section end */}
  {/* copyright section start */}
  <div className="copyright_section">
    <div className="container">
      <p className="copyright_text">
        Copyright 2019 All Right Reserved By.
        <Link to="https://html.design"> Free html Templates</Link> Distributed by.{" "}
        <Link to="https://themewagon.com">ThemeWagon</Link>{" "}
      </p>
      <p />
    </div>
  </div>
  {/* copyright section end */}
</>

  )
}
