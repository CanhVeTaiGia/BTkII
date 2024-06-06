import React from 'react'

export default function Home() {
  return (
    <>
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
  {/* header section end */}
  {/* about section start */}
  <div className="about_section layout_padding">
    <div id="my_main_slider" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="about_main">
                  <h1 className="about_taital">About Our</h1>
                  <p className="about_text">
                    It is a long established fact that a reader will be It is a
                    long established fact that a reader will be It is a long
                    established fact that a reader will be
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
                    It is a long established fact that a reader will be It is a
                    long established fact that a reader will be It is a long
                    established fact that a reader will be
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
                    It is a long established fact that a reader will be It is a
                    long established fact that a reader will be It is a long
                    established fact that a reader will be
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
  {/* booking section start */}
  <div className="booking_section">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="booking_taital">Book Now Table</h1>
          <p className="booking_text">
            It is a long established fact that a reader will be{" "}
          </p>
        </div>
        <div className="col-md-6">
          <div className="booking_bt">
            <a href="#">Book Table For Tea</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* booking section end */}
  {/* services section start */}
  <div className="services_section layout_padding">
    <div className="container">
      <h1 className="services_taital">Our Tea Services</h1>
      <p className="services_text">
        It is a long established fact that a reader will be{" "}
      </p>
      <div className="services_section_2 layout_padding">
        <div className="row">
          <div className="col-md-6">
            <div className="box_main active">
              <div className="left_main">
                <div className="cup_img_1">
                  <img src="images/cup-img-1.png" />
                </div>
              </div>
              <div className="middle_main">
                <div className="border_10 active" />
              </div>
              <div className="right_main">
                <h6 className="milk_text">Milk Tea</h6>
                <h1 className="price_text">$10</h1>
              </div>
            </div>
            <div className="box_main">
              <div className="left_main">
                <div className="cup_img_1">
                  <img src="images/cup-img-2.png" />
                </div>
              </div>
              <div className="middle_main">
                <div className="border_10" />
              </div>
              <div className="right_main">
                <h6 className="milk_text">Yellow Tea</h6>
                <h1 className="price_text">$20</h1>
              </div>
            </div>
            <div className="box_main">
              <div className="left_main">
                <div className="cup_img_1">
                  <img src="images/cup-img-3.png" />
                </div>
              </div>
              <div className="middle_main">
                <div className="border_10" />
              </div>
              <div className="right_main">
                <h6 className="milk_text">Green Tea</h6>
                <h1 className="price_text">$20</h1>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box_main">
              <div className="left_main">
                <div className="cup_img_1">
                  <img src="images/cup-img-4.png" />
                </div>
              </div>
              <div className="middle_main">
                <div className="border_10" />
              </div>
              <div className="right_main">
                <h6 className="milk_text">Red Tea</h6>
                <h1 className="price_text">$10</h1>
              </div>
            </div>
            <div className="box_main">
              <div className="left_main">
                <div className="cup_img_1">
                  <img src="images/cup-img-5.png" />
                </div>
              </div>
              <div className="middle_main">
                <div className="border_10" />
              </div>
              <div className="right_main">
                <h6 className="milk_text">Red Tea</h6>
                <h1 className="price_text">$10</h1>
              </div>
            </div>
            <div className="box_main">
              <div className="left_main">
                <div className="cup_img_1">
                  <img src="images/cup-img-5.png" />
                </div>
              </div>
              <div className="middle_main">
                <div className="border_10" />
              </div>
              <div className="right_main">
                <h6 className="milk_text">Red Tea</h6>
                <h1 className="price_text">$10</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="see_bt">
        <a href="#">See More</a>
      </div>
    </div>
  </div>
  {/* services section end */}
  {/* choose section start */}
  <div className="choose_section">
    <div className="container">
      <h1 className="choose_taital">Why Choose Us</h1>
      <p className="choose_text">
        It is a long established fact that a reader will beIt is a long
        established fact that a reader will be
      </p>
      <div className="choose_section_2">
        <div className="choose_left">
          <div className="choose_left_main">
            <div className="icon_1">
              <img src="images/icon-1.png" />
            </div>
          </div>
          <div className="choose_right_main">
            <h1 className="satisfied_text">
              99%
              <br />
              <span className="satisfied_text_1">SATISFIED Customer</span>
            </h1>
          </div>
        </div>
        <div className="choose_middle">
          <div className="choose_left_main">
            <div className="icon_1">
              <img src="images/icon-2.png" />
            </div>
          </div>
          <div className="choose_right_main">
            <h1 className="satisfied_text">
              40+
              <br />
              <span className="satisfied_text_1">AWESOME TEA</span>
            </h1>
          </div>
        </div>
        <div className="choose_middle_1">
          <div className="choose_left_main">
            <div className="icon_1">
              <img src="images/icon-3.png" />
            </div>
          </div>
          <div className="choose_right_main">
            <h1 className="satisfied_text">
              4500+
              <br />
              <span className="satisfied_text_1">Customer</span>
            </h1>
          </div>
        </div>
        <div className="choose_right">
          <div className="choose_left_main">
            <div className="icon_1">
              <img src="images/icon-4.png" />
            </div>
          </div>
          <div className="choose_right_main">
            <h1 className="satisfied_text">
              190+
              <br />
              <span className="satisfied_text_1">DAILY VISITORS</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* choose section end */}
  {/* shop section start */}
  <div className="shop_section layout_padding">
    <div id="my_slider" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <h1 className="shop_taital">Our Tea Shop</h1>
            <p className="shop_text">
              It is a long established fact that a reader will beIt is a long
              established fact that a reader will be
            </p>
            <div>
              <img src="images/img-3.png" className="image_3" />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <h1 className="shop_taital">Our Tea Shop</h1>
            <p className="shop_text">
              It is a long established fact that a reader will beIt is a long
              established fact that a reader will be
            </p>
            <div>
              <img src="images/img-3.png" className="image_3" />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <h1 className="shop_taital">Our Tea Shop</h1>
            <p className="shop_text">
              It is a long established fact that a reader will beIt is a long
              established fact that a reader will be
            </p>
            <div>
              <img src="images/img-3.png" className="image_3" />
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#my_slider"
        role="button"
        data-slide="next"
      >
        <i className="fa fa-arrow-left" />
      </a>
      <a
        className="carousel-control-next"
        href="#my_slider"
        role="button"
        data-slide="next"
      >
        <i className="fa fa-arrow-right" style={{ textAlign: "left" }} />
      </a>
    </div>
  </div>
  {/* shop section end */}
  {/* frequently section start */}
  <div className="frequently_section layout_padding">
    <div className="container">
      <h1 className="frequently_taital">Frequently Asked Questions</h1>
      <p className="frequently_text">
        It is a long established fact that a reader will beIt is a long
        established fact that a reader will be{" "}
      </p>
      <div className="frequently_section_2 layout_padding">
        <div className="bs-example">
          <div className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button
                    type="button"
                    className="btn btn-link w-100"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                  >
                    <i className="fa fa-plus" />
                    Where can I get some?
                  </button>
                </h2>
              </div>
              <div
                id="collapseOne"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    HTML stands for HyperText Markup Language. HTML is the
                    standard markup language for describing the structure of web
                    pages.{" "}
                    <a
                      href="https://www.tutorialrepublic.com/html-tutorial/"
                      target="_blank"
                    >
                      Learn more.
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                  <button
                    type="button"
                    className="btn btn-link collapsed w-100"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                  >
                    <i className="fa fa-plus" /> Why do we use it?
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                className="collapse show"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it{" "}
                    <a
                      href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/"
                      target="_blank"
                    >
                      Learn more.
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button
                    type="button"
                    className="btn btn-link collapsed w-100"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                  >
                    <i className="fa fa-plus" />
                    Where does it come from?
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    CSS stands for Cascading Style Sheet. CSS allows you to
                    specify various style properties for a given HTML element
                    such as colors, backgrounds, fonts etc.{" "}
                    <a
                      href="https://www.tutorialrepublic.com/css-tutorial/"
                      target="_blank"
                    >
                      Learn more.
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button
                    type="button"
                    className="btn btn-link collapsed w-100"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                  >
                    <i className="fa fa-plus" />
                    What is Lorem Ipsum?
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    CSS stands for Cascading Style Sheet. CSS allows you to
                    specify various style properties for a given HTML element
                    such as colors, backgrounds, fonts etc.{" "}
                    <a
                      href="https://www.tutorialrepublic.com/css-tutorial/"
                      target="_blank"
                    >
                      Learn more.
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button
                    type="button"
                    className="btn btn-link collapsed w-100"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                  >
                    <i className="fa fa-plus" />
                    Why do we use it?
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    CSS stands for Cascading Style Sheet. CSS allows you to
                    specify various style properties for a given HTML element
                    such as colors, backgrounds, fonts etc.{" "}
                    <a
                      href="https://www.tutorialrepublic.com/css-tutorial/"
                      target="_blank"
                    >
                      Learn more.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* frequently section end */}
  {/* clients section start */}
  <div className="clients_section layout_padding">
    <div id="custum_slider" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <h1 className="clients_taital">Client's Testimonial</h1>
            <p className="clients_text">
              Potential Clients are pouring our website on a daily basis after
              we use Organic Visit, really recommended their great job!
            </p>
            <div className="client_img">
              <img src="images/client-img.png" />
            </div>
            <h1 className="louis_text">Louis Gilyard</h1>
            <h1 className="smyth_text">SMYTH</h1>
            <div className="border" />
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <h1 className="clients_taital">Client's Testimonial</h1>
            <p className="clients_text">
              Potential Clients are pouring our website on a daily basis after
              we use Organic Visit, really recommended their great job!
            </p>
            <div className="client_img">
              <img src="images/client-img.png" />
            </div>
            <h1 className="louis_text">Louis Gilyard</h1>
            <h1 className="smyth_text">SMYTH</h1>
            <div className="border" />
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <h1 className="clients_taital">Client's Testimonial</h1>
            <p className="clients_text">
              Potential Clients are pouring our website on a daily basis after
              we use Organic Visit, really recommended their great job!
            </p>
            <div className="client_img">
              <img src="images/client-img.png" />
            </div>
            <h1 className="louis_text">Louis Gilyard</h1>
            <h1 className="smyth_text">SMYTH</h1>
            <div className="border" />
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#custum_slider"
        role="button"
        data-slide="next"
      >
        <i className="fa fa-angle-left" />
      </a>
      <a
        className="carousel-control-next"
        href="#custum_slider"
        role="button"
        data-slide="next"
      >
        <i className="fa fa-angle-right" />
      </a>
    </div>
  </div>
  {/* clients section end */}
  {/* contact section start */}
  <div className="contact_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="mail_main">
            <h1 className="contact_taital">Contact us</h1>
            <form action="/action_page.php">
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Name"
                  name="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Email"
                  name="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Subject"
                  name="Email"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="massage-bt"
                  placeholder="Massage"
                  rows={5}
                  id="comment"
                  name="text"
                  defaultValue={""}
                />
              </div>
            </form>
            <div className="send_btn">
              <div className="main_bt">
                <a href="#">Send</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="map_main">
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                width={600}
                height={600}
                frameBorder={0}
                style={{ border: 0, width: "100%" }}
                // allowFullScreen=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* contact section end */}
</>

  )
}
