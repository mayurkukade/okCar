import SubNav from "../Navbar/SubNav";

const Contact = () => {
  return (
    <>
      <SubNav componentsName={"Contact Us"} />
      <div className="inner-page" style={{ backgroundColor: "teal" }}>
        <div className="container">
          <div className="contact-wrap">
            <div className="row">
              <div className="contact-now">
                <div className="col-md-4 column">
                  <div className="contact">
                    <span>
                      <i className="fa fa-home"></i>
                    </span>
                    <div className="information">
                      <strong>Address:</strong>
                      <p>
                        8500 lorem, New Ispum, Dolor amet sit 12301
                        <br />
                        New York, USA
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 column">
                  <div className="contact">
                    <span>
                      <i className="fa fa-envelope"></i>
                    </span>
                    <div className="information">
                      <strong>Email Address:</strong>
                      <p>investigate@your-site.com</p>
                      <p>investigate@your-site.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 column">
                  <div className="contact">
                    <span>
                      <i className="fa fa-phone"></i>
                    </span>
                    <div className="information">
                      <strong>Phone No:</strong>
                      <p>+12 345 67 09</p>
                      <p>+12 345 67 09</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 column">
                <div className="contact-form">
                  <div id="message"></div>
                  <form
                    method="post"
                    action=""
                    name="contactform"
                    id="contactform"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Full name</label>
                        <input
                          name="name"
                          type="text"
                          id="name"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="col-md-6">
                        <label>Email</label>
                        <input
                          name="email"
                          type="text"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          name="email"
                          type="text"
                          id="email"
                          placeholder="Address"
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                          rows="4"
                          name="comments"
                          id="comments"
                          placeholder="Details"
                        ></textarea>
                      </div>
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >

                        <button
                          title=""
                          className="button"
                          type="submit"
                          id="submit"
                        >
                          Submit Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
