"use client"
import React, { useState } from 'react';
import '@/components/Author/Register/RegisterPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }
  return (
    <div className='register-page'>
        <div className="sign-in">
            <div className="title">Sign in</div>
            <form className="register-form">
                <div className="input-box">
                    <FontAwesomeIcon icon={faUser} />
                    <input type="text" id='name' name='name' required/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-box">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input type="email" id='email' name='email' required/>
                    <label htmlFor="name">Email</label>
                </div>
                <div className="input-box">
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={togglePassword}/>
                    <input type={showPassword ? 'text' : 'password'} id='password' name='password' required/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="policy">
                    <input type="checkbox" id='rememberme'/>
                    <label htmlFor="rememberme">I accept the <Link href={'#'} >Privacy Policy</Link></label>
                </div>
                <div className="button">
                    Sign up
                </div>
                <div className="sign-up">
                    Already have an account? <Link href={'/authorization/login'}>Sign in</Link>
                </div>
            </form>
            <div className="social-register">
                <div className="or">
                    <span>or</span>
                </div>
                <div className="social-links">
                    <div className="social-box fa">
                        <Link href={'#'}>
                            <FontAwesomeIcon icon={faFacebookF} />
                            <span>Sign up with Facebook</span>
                        </Link>
                    </div>
                    <div className="social-box x">
                        <Link href={'#'}>
                            <FontAwesomeIcon icon={faXmark} />
                            <span>Sign up with X</span>
                        </Link>
                    </div>
                    <div className="social-box insta">
                        <Link href={'#'}><FontAwesomeIcon icon={faInstagram} /><span>Sign up with Instagram</span></Link>       
                    </div>      
                </div>
                <div className="social-title">Sign up with social media</div>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage