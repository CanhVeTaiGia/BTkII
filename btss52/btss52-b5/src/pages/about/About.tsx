import React from "react";

export default function About() {
  return (
    <>
      {/* about section start */}
      <div className="about_section layout_padding">
        <div
          id="my_main_slider"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="about_main">
                      <h1 className="about_taital">About Our</h1>
                      <p className="about_text">
                        It is a long established fact that a reader will be It
                        is a long established fact that a reader will be It is a
                        long established fact that a reader will be
                      </p>
                      <div className="readmore_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="image_2">
                      <img src="images/img-2.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="about_main">
                      <h1 className="about_taital">About Our</h1>
                      <p className="about_text">
                        It is a long established fact that a reader will be It
                        is a long established fact that a reader will be It is a
                        long established fact that a reader will be
                      </p>
                      <div className="readmore_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="image_2">
                      <img src="images/img-2.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="about_main">
                      <h1 className="about_taital">About Our</h1>
                      <p className="about_text">
                        It is a long established fact that a reader will be It
                        is a long established fact that a reader will be It is a
                        long established fact that a reader will be
                      </p>
                      <div className="readmore_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="image_2">
                      <img src="images/img-2.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#my_main_slider"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-angle-left" />
          </a>
          <a
            className="carousel-control-next"
            href="#my_main_slider"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-angle-right" />
          </a>
        </div>
      </div>
      {/* about section end */}
    </>
  );
}
