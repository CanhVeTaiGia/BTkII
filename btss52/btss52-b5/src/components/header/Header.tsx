import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* header section start */}
      <div className="header_section">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link" to=''>
                Home
              </NavLink>
              <NavLink className="nav-item nav-link" to='/about'>
                About
              </NavLink>
              <NavLink className="nav-item nav-link" to='/tea-shop'>
                Teashop
              </NavLink>
              <NavLink className="nav-item nav-link" to='/pricing'>
                Pricing
              </NavLink>
              <NavLink className="nav-item nav-link" to={'/contact'}>
                Contact
              </NavLink>
            </div>
          </div>
          <div className="login_menu">
            <a href="#">
              <img src="assets/images/search-icon.png" />
            </a>
          </div>
        </nav>
        {/* banner section end */}
        <div className="banner_section layout_padding">
          <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h1 className="banner_taital">
                        Test of <span style={{ color: "#f3801f" }}>Tea</span>
                      </h1>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <img src="images/img-1.png" className="image_1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h1 className="banner_taital">
                        Test of <span style={{ color: "#f3801f" }}>Tea</span>
                      </h1>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <img src="images/img-1.png" className="image_1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h1 className="banner_taital">
                        Test of <span style={{ color: "#f3801f" }}>Tea</span>
                      </h1>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <img src="images/img-1.png" className="image_1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#main_slider"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-left" />
            </a>
            <a
              className="carousel-control-next"
              href="#main_slider"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>
        <div className="container">
          <div className="play_icon">
            <a href="#">
              <img src="images/play-icon.png" />
            </a>
          </div>
        </div>
        {/* banner section end */}
      </div>
      {/* header section end */}
    </>
  );
}
