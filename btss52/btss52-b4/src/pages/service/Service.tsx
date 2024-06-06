import React from 'react'

export default function Service() {
  return (
    <>
  {/* Page Header Start */}
  <div
    className="container-fluid page-header py-5 mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container text-center py-5">
      <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">
        Service
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
            Service
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Service Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <p className="d-inline-block bg-secondary text-primary py-1 px-4">
          Services
        </p>
        <h1 className="text-uppercase">What We Provide</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
            <div
              className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
              style={{ width: 60, height: 60 }}
            >
              <img className="img-fluid" src="img/haircut.png" alt="" />
            </div>
            <div className="ps-4">
              <h3 className="text-uppercase mb-3">Haircut</h3>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam.
              </p>
              <span className="text-uppercase text-primary">From $15</span>
            </div>
            <a className="btn btn-square" href="">
              <i className="fa fa-plus text-primary" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
            <div
              className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
              style={{ width: 60, height: 60 }}
            >
              <img className="img-fluid" src="img/beard-trim.png" alt="" />
            </div>
            <div className="ps-4">
              <h3 className="text-uppercase mb-3">Beard Trim</h3>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam.
              </p>
              <span className="text-uppercase text-primary">From $15</span>
            </div>
            <a className="btn btn-square" href="">
              <i className="fa fa-plus text-primary" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
            <div
              className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
              style={{ width: 60, height: 60 }}
            >
              <img className="img-fluid" src="img/mans-shave.png" alt="" />
            </div>
            <div className="ps-4">
              <h3 className="text-uppercase mb-3">Mans Shave</h3>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam.
              </p>
              <span className="text-uppercase text-primary">From $15</span>
            </div>
            <a className="btn btn-square" href="">
              <i className="fa fa-plus text-primary" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
            <div
              className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
              style={{ width: 60, height: 60 }}
            >
              <img className="img-fluid" src="img/hair-dyeing.png" alt="" />
            </div>
            <div className="ps-4">
              <h3 className="text-uppercase mb-3">Hair Dyeing</h3>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam.
              </p>
              <span className="text-uppercase text-primary">From $15</span>
            </div>
            <a className="btn btn-square" href="">
              <i className="fa fa-plus text-primary" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
            <div
              className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
              style={{ width: 60, height: 60 }}
            >
              <img className="img-fluid" src="img/mustache.png" alt="" />
            </div>
            <div className="ps-4">
              <h3 className="text-uppercase mb-3">Mustache</h3>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam.
              </p>
              <span className="text-uppercase text-primary">From $15</span>
            </div>
            <a className="btn btn-square" href="">
              <i className="fa fa-plus text-primary" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
            <div
              className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
              style={{ width: 60, height: 60 }}
            >
              <img className="img-fluid" src="img/stacking.png" alt="" />
            </div>
            <div className="ps-4">
              <h3 className="text-uppercase mb-3">Stacking</h3>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam.
              </p>
              <span className="text-uppercase text-primary">From $15</span>
            </div>
            <a className="btn btn-square" href="">
              <i className="fa fa-plus text-primary" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* Testimonial Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <p className="d-inline-block bg-secondary text-primary py-1 px-4">
          Testimonial
        </p>
        <h1 className="text-uppercase">What Our Clients Say!</h1>
      </div>
      <div
        className="owl-carousel testimonial-carousel wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div
          className="testimonial-item text-center"
          data-dot="<img class='img-fluid' src='img/testimonial-1.jpg' alt=''>"
        >
          <h4 className="text-uppercase">Client Name</h4>
          <p className="text-primary">Profession</p>
          <span className="fs-5">
            Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
            duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
            erat magna elitr erat sit sit erat at rebum justo sea clita.
          </span>
        </div>
        <div
          className="testimonial-item text-center"
          data-dot="<img class='img-fluid' src='img/testimonial-2.jpg' alt=''>"
        >
          <h4 className="text-uppercase">Client Name</h4>
          <p className="text-primary">Profession</p>
          <span className="fs-5">
            Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
            duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
            erat magna elitr erat sit sit erat at rebum justo sea clita.
          </span>
        </div>
        <div
          className="testimonial-item text-center"
          data-dot="<img class='img-fluid' src='img/testimonial-3.jpg' alt=''>"
        >
          <h4 className="text-uppercase">Client Name</h4>
          <p className="text-primary">Profession</p>
          <span className="fs-5">
            Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
            duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
            erat magna elitr erat sit sit erat at rebum justo sea clita.
          </span>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
</>

  )
}
