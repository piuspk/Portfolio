import React, { useState, useRef } from "react";
import { useForm } from "@formspree/react";
import "./ContactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xleyragl");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    setIsSubmitted(true);
    formRef.current.reset();
  };

  return (
    <div id="contact" className="container contact-form">
      <div className="contact-image">
        <img
          src="https://image.ibb.co/kUagtU/rocket_contact.png"
          alt="rocket_contact"
        />
      </div>
      <form ref={formRef} onSubmit={handleFormSubmit}>
        <h3>Drop Us a Message</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Your Phone Number *"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                placeholder="Your Message *"
                style={{ width: "100%", height: "150px" }}
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="submit"
                name="btnSubmit"
                className="btnContact"
                value="Send Message"
              />
            </div>
          </div>
        </div>
      </form>
      {isSubmitted && (
        <div className="success-message">
          Thank you for contacting me! I will reply to you soon.
        </div>
      )}
    </div>
  );
}

export default ContactForm;
