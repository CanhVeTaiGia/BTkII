
export default function Contact() {
  return (
    <>
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
      </div>
    </div>
  </div>
  {/* contact section end */}
</>

  )
}
