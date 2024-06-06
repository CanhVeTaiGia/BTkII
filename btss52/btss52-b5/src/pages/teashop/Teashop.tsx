import React from 'react'

export default function Teashop() {
  return (
    <>
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
</>

  )
}
