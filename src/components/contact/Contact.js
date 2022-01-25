import { useState } from "react";
import emailjs from "emailjs-com";
function Contact() {
  var [error, setState] = useState("");
  function sendEmail(e) {
    e.preventDefault();
    if (e.target.name.value === "") {
      setState("error");
    } else {
      setState("");
      if (e.target.email.value === "") {
        setState("error");
      } else {
        emailjs
          .sendForm(
            "service_e1otllx",
            "template_ng3svae",
            e.target,
            "user_hOpmJ4VssN8j4S6iRusoH"
          )
          .then((res) => {
            console.log("Email Response:: ", res);
          })
          .then((err) => {
            console.log("Email error", err);
          });
      }
    }
  }
  return (
    <section id="contact">
      <div id="contact-inner-container" className="m4">
        <div className="heading-container">
          <h2 id="contact-heading" className="section-heading">
            Get in touch
          </h2>
        </div>
        <form
          id="contact-form"
          name="contact-form"
          method="post"
          onSubmit={sendEmail}
        >
          <div id="form-inner-container">
            <div className="field-container text-field-container">
              <input
                className={`text-field ${error}`}
                id="name"
                name="name"
                type="text"
                placeholder="your name (required)"
                autoComplete="off"
              />
            </div>
            <div className="field-container text-field-container">
              <input
                className={`text-field ${error}`}
                id="email"
                name="email"
                type="text"
                placeholder="your email (required)"
                autoComplete="off"
              />
            </div>
            <div className="field-container">
              <textarea
                className="text-field"
                id="message"
                name="message"
                placeholder="your message"
              ></textarea>
            </div>
            <div className="field-container">
              <input id="submit-btn" type="submit" value="get in touch" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
