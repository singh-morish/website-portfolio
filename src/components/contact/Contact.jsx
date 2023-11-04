import React from "react";
import "./Contact.css";
import { BiLogoGmail } from "react-icons/bi";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_de7mlua', 'template_z8kiysn', form.current, 'cOnTCNYXRk4GnGgo0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact__option">
            <BiLogoGmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>morish.dtg@gmail.com</h5>
            <a href="mailto:morish.dtg@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Morish Kumar</h5>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+919430782078</h5>
            <a
              href="https://api.whatsapp.com/send?phone=9430782078"
              target="_blank" rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="text" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="7" placeholder="Your Message" required />
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>

      </div>

    </section>
  );
};

export default Contact;
