import React from 'react'

export default function Blog() {
  return (
    <>
  {/*  blog section start */}
  <div className="blog_section layout_padding">
    <div className="container-fluid">
      <h1 className="blog_taital">What We Do</h1>
      <p className="blog_text">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some{" "}
      </p>
      <div className="blog_section_2">
        <div className="row">
          <div className="col-md-6 padding_left_0">
            <div className="image_4" >
              <img src="images/img-4.png" />
            </div>
          </div>
          <div className="col-md-6">
            <h4 className="laptop_text">Mobiles Repair </h4>
            <p className="ipsum_text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure{" "}
            </p>
            <div className="read_bt_2">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className="blog_section_3">
          <div className="row">
            <div className="col-md-6">
              <div className="blog_taital_main">
                <h4 className="laptop_text">Tablate Rapair</h4>
                <p className="ipsum_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure{" "}
                </p>
                <div className="read_bt_2">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 padding_right_0">
              <div className="image_5" >
                <img src="images/img-5.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="blog_section_2">
          <div className="row">
            <div className="col-md-6 padding_left_0">
              <div className="image_4" >
                <img src="images/img-6.png" />
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="laptop_text">Laptop And pc Repair</h4>
              <p className="ipsum_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure{" "}
              </p>
              <div className="read_bt_2">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*  blog section end */}
</>

  )
}
