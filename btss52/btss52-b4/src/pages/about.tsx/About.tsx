import React from 'react'

export default function About() {
  return (
    <><>
    {/* Page Header Start */}
    <div
      className="container-fluid page-header py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center py-5">
        <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">
          About
        </h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb justify-content-center text-uppercase mb-0">
            <li className="breadcrumb-item">
              <a className="text-white" href="#">
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a className="text-white" href="#">
                Pages
              </a>
            </li>
            <li
              className="breadcrumb-item text-primary active"
              aria-current="page"
            >
              About
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Page Header End */}
    {/* About Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="d-flex flex-column">
              <img
                className="img-fluid w-75 align-self-end"
                src="img/about.jpg"
                alt=""
              />
              <div
                className="w-50 bg-secondary p-5"
                style={{ marginTop: "-25%" }}
              >
                <h1 className="text-uppercase text-primary mb-3">25 Years</h1>
                <h2 className="text-uppercase mb-0">Experience</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <p className="d-inline-block bg-secondary text-primary py-1 px-4">
              About Us
            </p>
            <h1 className="text-uppercase mb-4">
              More Than Just A Haircut. Learn More About Us!
            </h1>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <p className="mb-4">
              Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet
              est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy
              clita sit at, sed sit sanctus dolor eos.
            </p>
            <div className="row g-4">
              <div className="col-md-6">
                <h3 className="text-uppercase mb-3">Since 1990</h3>
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos.
                </p>
              </div>
              <div className="col-md-6">
                <h3 className="text-uppercase mb-3">1000+ clients</h3>
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Team Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <p className="d-inline-block bg-secondary text-primary py-1 px-4">
            Our Barber
          </p>
          <h1 className="text-uppercase">Meet Our Barber</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid" src="img/team-1.jpg" alt="" />
                <div className="team-social">
                  <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="bg-secondary text-center p-4">
                <h5 className="text-uppercase">Barber Name</h5>
                <span className="text-primary">Designation</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid" src="img/team-2.jpg" alt="" />
                <div className="team-social">
                  <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="bg-secondary text-center p-4">
                <h5 className="text-uppercase">Barber Name</h5>
                <span className="text-primary">Designation</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                <div className="team-social">
                  <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="bg-secondary text-center p-4">
                <h5 className="text-uppercase">Barber Name</h5>
                <span className="text-primary">Designation</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid" src="img/team-4.jpg" alt="" />
                <div className="team-social">
                  <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="bg-secondary text-center p-4">
                <h5 className="text-uppercase">Barber Name</h5>
                <span className="text-primary">Designation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Team End */}
    {/* Footer Start */}
    <div
      className="container-fluid bg-secondary text-light footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <h4 className="text-uppercase mb-4">Get In Touch</h4>
            <div className="d-flex align-items-center mb-2">
              <div className="btn-square bg-dark flex-shrink-0 me-3">
                <span className="fa fa-map-marker-alt text-primary" />
              </div>
              <span>123 Street, New York, USA</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <div className="btn-square bg-dark flex-shrink-0 me-3">
                <span className="fa fa-phone-alt text-primary" />
              </div>
              <span>+012 345 67890</span>
            </div>
            <div className="d-flex align-items-center">
              <div className="btn-square bg-dark flex-shrink-0 me-3">
                <span className="fa fa-envelope-open text-primary" />
              </div>
              <span>info@example.com</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="text-uppercase mb-4">Quick Links</h4>
            <a className="btn btn-link" href="">
              About Us
            </a>
            <a className="btn btn-link" href="">
              Contact Us
            </a>
            <a className="btn btn-link" href="">
              Our Services
            </a>
            <a className="btn btn-link" href="">
              Terms &amp; Condition
            </a>
            <a className="btn btn-link" href="">
              Support
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="text-uppercase mb-4">Newsletter</h4>
            <div className="position-relative mb-4">
              <input
                className="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
            <div className="d-flex pt-1 m-n1">
              <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
                <i className="fab fa-youtube" />
              </a>
              <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              ©{" "}
              <a className="border-bottom" href="#">
                Your Site Name
              </a>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
              Designed By{" "}
              <a className="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End */}
    {/* Back to Top */}
    <a href="#" className="btn btn-primary btn-lg-square back-to-top">
      <i className="bi bi-arrow-up" />
    </a>
  </>
  </>
  )
}
