import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import { ToastContainer,toast } from 'react-toastify'

function ContactUs() {

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
    <> 
      
 
      <div>
        
         
        <div className="page-wrapper">
         
          <div className="section contact">
            <div className="container-default contact w-container">
              <div className="contact-wrapper">
                <div className="split-content contact-left">
                  <h1 data-w-id="2a355a42-5abe-061c-27be-813571409fc9" style={{WebkitTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',  }} className="title contact"> <span style={{color:'#da1c5c'}}>Contact</span> Us</h1>
                  <p data-w-id="f0d378cd-c290-6189-e996-9fe8e79f435f" style={{WebkitTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', }} className="paragraph contact px-[10px]">We’d love to hear from you! Whether you have questions, suggestions, or want to collaborate, feel free to reach out to us. Our team at She Talks is always here to assist you!
                  </p>
                  <div data-w-id="a0f1d516-e0b1-a799-88bd-d91e26250c22" style={{WebkitTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', }} className="w-layout-grid contact-links-grid"><a href="" className="card contact-link w-inline-block" onClick={()=> {window.location.href = 'mailto:support@shetalks.world'}}>
                      <div className="image-wrapper contact-link-icon"><img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b7b8e2e9543752d84d79ed_icon-1-contact-links-app-x-template.svg" alt=" " className="image contact-link-icon" /></div>
                      <div className="contact-link-content">
                        <div className="contact-link-title">Email us</div>
                        <div className="contact-link-text"> support@shetalks.world
                        </div>
                      </div>
                    </a><a href="tel:9004114517 " className="card contact-link w-inline-block">
                      <div className="image-wrapper contact-link-icon"><img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b7b8e2900950070f94dd97_icon-2-contact-links-app-x-template.svg" alt=" " className="image contact-link-icon" /></div>
                      <div className="contact-link-content">
                        <div className="contact-link-title">Call us</div>
                        <div className="contact-link-text">9004114517</div>
                      </div>
                    </a><a href="" target="_blank" className="card contact-link w-inline-block">
                      <div className="image-wrapper contact-link-icon"><img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b7b8e381c466b140e55608_icon-3-contact-links-app-x-template.svg" alt=" " className="image contact-link-icon" /></div>
                      <div className="contact-link-content">
                        <div className="contact-link-title">Address</div>
                        <div className="contact-link-text">Kozhikode, near civil station 673001, Kerala,India </div>
                      </div>
                    </a></div>
                </div>
                <div data-w-id="f628433d-0d2f-807e-5569-a9818ece717e" style={{WebkitTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',  }} className="card contact">
                  <div className="contact-form-block w-form">
                    <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form" method="get" className="contact-form" 
                    onSubmit={handleSubmit}
                    data-wf-page-id="60b7ab40d1620721e6ba1b9f" data-wf-element-id="1fea3553-cc35-955c-9c78-728d834b9e9c">
                      <div className="input-wrapper"><label htmlFor="name">Full name</label><input className="input w-input" maxLength={256} name="name" data-name="Name" placeholder="Enter Your Name" type="text" id="name" value={name}
                onChange={(e)=>setName(e.target.value)} required /></div>
                      <div className="input-wrapper"><label htmlFor="email">Email address</label><input className="input w-input" maxLength={256} name="email" data-name="Email" placeholder="example@youremail.com" type="email" id="email"  value={email}
                onChange={(e)=>setEmail(e.target.value)} required /></div>
                      <div className="input-wrapper"><label htmlFor="Phone">Phone number</label><input className="input w-input" maxLength={256} name="Phone" data-name="Phone" placeholder="(+91)  123 - 456 -7890" type="tel" id="phone"  value={phone}
                onChange={(e)=>setPhone(e.target.value)} required /></div>
                       
                      <div id="w-node-b858b3c8-6167-2609-85d9-8c2ee908e624-e6ba1b9f" className="input-wrapper"><label htmlFor="Message">Address</label><textarea placeholder="Type your message here..." maxLength={5000} id="message" name="Message"   value={address}
                onChange={(e)=>setAddress(e.target.value)} data-name="Message" className="text-area w-input" defaultValue={""} /></div><input type="submit" data-wait="Please wait..." id="w-node-_1fea3553-cc35-955c-9c78-728d834b9ea3-e6ba1b9f" className="button-primary large contact-form-button w-button" defaultValue="Send message" />
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
            </div>
            <div className="bg contact">
               <div className='sm:h-[695px] sm:w-[800px] contact-bg-animation'></div>
              </div>
          </div>
        </div> 
      </div>
      <ToastContainer position="top-center" autoClose={1800} theme='light' />
  
 
    </>
  )
}

export default ContactUs