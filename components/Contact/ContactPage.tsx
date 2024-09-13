import React from 'react';
import '@/components/Contact/ContactPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ContactPage = () => {
    return (
        <div className='contact-page'>
            <div className="contact-body">
                <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p>Let's explore how Notion can work for you.</p>
                    <div className="info">
                        <div>
                            <FontAwesomeIcon icon={faCheck} /> 
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eligendi!</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCheck} /> 
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rerum est culpa. Illum illo aliquid asperiores quisquam voluptates quo perferendis amet saepe.</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCheck} /> 
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eligendi!</p>
                        </div>
                    </div>
                    <span>Looking for support? <Link href={'/'}>Visit help & documentation</Link></span>
                </div>
                <form className="contact-form">
                    <div className="input-box">
                        <input type="text" id='name' placeholder='First name' required/>
                        <label htmlFor="name"></label>
                    </div>
                    <div className="input-box">
                        <input type="text" id='lastName' placeholder='Last name'/>
                        <label htmlFor="name"></label>
                    </div>
                    <div className="input-box">
                        <input type="email" id='email' placeholder='Email' required/>
                        <label htmlFor="email"></label>
                    </div>
                    <div className="input-box">
                        <input type="text" id='subject' placeholder='Subject' required/>
                        <label htmlFor="name"></label>
                    </div>
                    <div className="input-box">
                        <textarea name="textarea" placeholder='Message'></textarea>
                    </div>
                    <button type='submit'>
                        Send
                    </button>
                </form>
            </div>
            <div className="contact-other">
                <div>
                    <FontAwesomeIcon icon={faEnvelope} /> <br />
                    <div className='contact-details'>
                        <h3>Email</h3>
                        <p>kkocbeler@gmail.com</p>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon icon={faLocationDot} /> <br />
                    <div className='contact-details'>
                        <h3>Office</h3>
                        <p>2563 Woodbridge Lane, Daleware 12200</p>
                    </div>
                </div> 
                <div>
                    <FontAwesomeIcon icon={faPhone} /> <br />
                    <div className='contact-details'>
                        <h3>Phone</h3>
                        <p>+0123 456 7890</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage