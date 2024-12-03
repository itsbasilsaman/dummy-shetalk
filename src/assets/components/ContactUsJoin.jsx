import React from 'react'

function ContactUsJoin() {
  return (
    <div>
      <div className="w-full sm:px-[40px] px-[25px] pb-[30px] pt-[20px] sm:pt-[0px] flex items-center flex-col">
                  <h1  className="title contact" style={{textAlign: 'center'}}>Join as Trainer
                  </h1>
                  <p   className="paragraph contact sm:px-[10px] text-justify sm:w-[820px]"  >
Are you passionate about empowering women through knowledge and skills? If you have the expertise, a strong desire to make a difference, and a commitment to fostering an inclusive community, we want you to be part of our network.

                  </p>
                  <div   className="w-layout-grid contact-links-grid sm:w-[400px]"><a href=" " className="card contact-link w-inline-block">
                      <div className="image-wrapper contact-link-icon"><img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b7b8e2e9543752d84d79ed_icon-1-contact-links-app-x-template.svg" alt=" " className="image contact-link-icon"  onClick={()=> {window.location.href = 'mailto:support@shetalks.world'}}  /></div>
                      <div className="contact-link-content">
                        <div className="contact-link-title">Email us</div>
                        <div className="contact-link-text"> contact@she-talks.com
                        </div>
                      </div>
                    </a> </div>
                </div>
    </div>
  )
}

export default ContactUsJoin