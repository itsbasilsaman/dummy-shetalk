import React from 'react'

function DeleteAccount() {
  return (
    <div className='w-full h-auto pb-[115px] sm:pb-[117px] flex justify-center items-center mt-[-130px] sm:mt-[0px]'>
        <div data-w-id="f628433d-0d2f-807e-5569-a9818ece717e" style={{WebkitTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',  }} className="card delete-account contact">
                  <div className="contact-form-block w-form">
                    <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form" method="get" className="contact-form" data-wf-page-id="60b7ab40d1620721e6ba1b9f" data-wf-element-id="1fea3553-cc35-955c-9c78-728d834b9e9c">
                      <div className="input-wrapper"><label htmlFor="name">Full name</label><input className="input w-input" maxLength={256} name="name" data-name="Name" placeholder="FirstName LastName" type="text" id="name" required /></div>
                      <div className="input-wrapper"><label htmlFor="email">Email address</label><input className="input w-input" maxLength={256} name="email" data-name="Email" placeholder="example@youremail.com" type="email" id="email" required /></div>
                      <div className="input-wrapper"><label htmlFor="Phone">Phone number</label><input className="input w-input" maxLength={256} name="Phone" data-name="Phone" placeholder="(+91)  123 - 456 -7890" type="tel" id="phone" required /></div>
                      
                      <div id="w-node-b858b3c8-6167-2609-85d9-8c2ee908e624-e6ba1b9f" className="input-wrapper"><label htmlFor="Message">Address</label><textarea placeholder="Type your message here..." maxLength={5000} id="message" name="Message" data-name="Message" className="text-area w-input" defaultValue={""} /></div><input type="submit" data-wait="Please wait..." id="w-node-_1fea3553-cc35-955c-9c78-728d834b9ea3-e6ba1b9f" className="button-primary large contact-form-button w-button" defaultValue="Send message" />
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
  )
}

export default DeleteAccount