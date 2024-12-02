import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function DeleteAccount() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_f9a3pzy', // Your service ID
        'template_si2yiv9', // Your template ID (create this in the EmailJS dashboard)
        e.target, // The form data
        'basilsaman.connects@gmail.com' // Your user ID
      )
      .then(
        (result) => {
          console.log('Email sent successfully', result.text);
        },
        (error) => {
          console.log('Error sending email', error.text);
        }
      );
  };

  return (
    <div className='w-full h-auto pb-[115px] sm:pb-[117px] flex justify-center items-center mt-[-130px] sm:mt-[0px]'>
      <div className="card delete-account contact">
        <div className="contact-form-block w-form">
          <form
            id="wf-form-Contact-Form"
            name="wf-form-Contact-Form"
            data-name="Contact Form"
            onSubmit={handleSubmit} // On submit, trigger the handleSubmit function
            className="contact-form"
          >
            <div className="input-wrapper">
              <label htmlFor="name">Full name</label>
              <input
                className="input w-input"
                maxLength={256}
                name="name"
                placeholder="FirstName LastName"
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={handleInputChange} // Handle name input changes
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email address</label>
              <input
                className="input w-input"
                maxLength={256}
                name="email"
                placeholder="example@youremail.com"
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleInputChange} // Handle email input changes
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="phone">Phone number</label>
              <input
                className="input w-input"
                maxLength={256}
                name="phone"
                placeholder="(+91)  123 - 456 -7890"
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={handleInputChange} // Handle phone input changes
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="message">Address</label>
              <textarea
                placeholder="Type your message here..."
                maxLength={5000}
                id="message"
                name="address"
                className="text-area w-input"
                value={formData.address}
                onChange={handleInputChange} // Handle address input changes
              />
            </div>
            <input
              type="submit"
              data-wait="Please wait..."
              className="button-primary large contact-form-button w-button"
              value="Send message"
            />
          </form>
          <div className="success-message w-form-done">
            <div>Your message has been submitted. <br />We will get back to you within 24-48 hours.</div>
          </div>
          <div className="error-message w-form-fail">
            <div>Oops! Something went wrong.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccount;
