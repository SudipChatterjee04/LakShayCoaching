import React from "react";

const ContactForm = ({ namePlaceholder, emailPlaceholder, messagePlaceholder }) => {
  return (
    <div className="col-md-6">
      <form id="contact" action="" method="post" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="col-md-6">
            <fieldset>
              <input
                name="name"
                type="text"
                className="form-control"
                id="name"
                placeholder={namePlaceholder || "Your Name"}
                required=""
              />
            </fieldset>
          </div>

          <div className="col-md-6">
            <fieldset>
              <input
                name="email"
                type="text"
                className="form-control"
                id="email"
                placeholder={emailPlaceholder || "Your Email"}
                required=""
              />
            </fieldset>
          </div>

          <div className="col-md-12">
            <fieldset>
              <textarea
                name="message"
                rows="6"
                className="form-control"
                id="message"
                placeholder={messagePlaceholder || "Your message..."}
                required=""
              ></textarea>
            </fieldset>
          </div>

          <div className="col-md-12">
            <fieldset>
              <button type="submit" id="form-submit" className="button">
                Send Message Now
              </button>
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
