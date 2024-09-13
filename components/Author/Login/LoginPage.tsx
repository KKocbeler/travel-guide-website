"use client"
import React, { useState } from 'react';
import '@/components/Author/Login/LoginPage.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash, faUser, faX } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }
  return (
    <div className='login-page'>
        <div className="image">
            <img src="/img/author/login-image.png" alt="" />
        </div>
        <div className="login">
            <div className="title">Login</div>
            <form className="login-form">
                <div className="input-box">
                    <FontAwesomeIcon icon={faUser} />
                    <input type="text" id='username' name='username' required/>
                    <label htmlFor="username">Username</label>
                </div>
                <div className="input-box">
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={togglePassword}/>
                    <input type={showPassword ? 'text' : 'password'} id='password' name='password' required/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="remember-me">
                    <input type="checkbox" id='rememberme'/>
                    <label htmlFor="rememberme">Remember me</label>
                </div>
                <button type="submit">Sign in</button>
                <div className="sign-up">
                    Don't have an account? <Link href={'/authorization/register'}>Sign up</Link>
                </div>
            </form>
            <div className="social-login">
                <div className="or">
                    <span>or</span>
                </div>
                <div className="social-links">
                    <Link href={'#'}><FontAwesomeIcon icon={faFacebookF} /></Link>
                    <Link href={'#'}><FontAwesomeIcon icon={faX} /></Link>
                    <Link href={'#'}><FontAwesomeIcon icon={faInstagram} /></Link>                
                </div>
                <div className="social-title">Login with social media</div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage