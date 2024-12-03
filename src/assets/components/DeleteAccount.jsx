import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import { ToastContainer,toast } from 'react-toastify'

function DeleteAccount() {

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [phone , setPhone] = useState('')
  const [address ,setAddress] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const serviceId = 'service_qyvhtui'
    const templateId = 'template_si2yiv9'
    const publicKey = 'toJUQeF1y8xCfYqJq'

    const templateParams = {
      from_name: name,
      from_email: email,
      from_number : phone,
      from_address : address,
      to_name: 'She Talks',
    }

    emailjs.send(serviceId,templateId,templateParams,publicKey).then((response)=> {
      console.log('Email sent successfully!', response);
      toast.success('Your message has been submitted.');
      setName('')
      setEmail('')
      setPhone('')
      setAddress('')
    }).catch((error)=> {
      console.error('Error sending email:' , error);
      toast.error('Oops! Something went wrong.')
    })

  }
 

  return (
    <div className='w-full h-auto pb-[115px] sm:pb-[117px] flex justify-center items-center mt-[-130px] sm:mt-[0px]'>
      <div className="card delete-account contact">
        <div className="contact-form-block w-form">
          <form
            id="wf-form-Contact-Form"
            name="wf-form-Contact-Form"
            data-name="Contact Form"
            onSubmit={handleSubmit}
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
                value={name}
                onChange={(e)=>setName(e.target.value)}
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
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
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
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
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
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
              />
            </div>
            <input
              type="submit"
              data-wait="Please wait..."
              className="button-primary large contact-form-button w-button"
              value="Send message"
            />
          </form>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={1800} theme='light' />
    </div>
  );
}

export default DeleteAccount;
