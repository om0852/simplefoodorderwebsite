"use client"
import { auth } from '@/firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import React, { useState } from 'react';
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css";
const Page = () => {
    
  const [otp, setOtp] = useState('')
  const [ph, setPh] = useState('')
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

    
    return (
        <div>
            <div className='recaptcha-container'></div>
           <label htmlFor='' className='phonelabel'>Verify your phone number</label>
                    <PhoneInput country={"in"} value={ph} onChange={setPh}></PhoneInput>
                    <button
                      onClick={onSignup}
                      className='signupbutton'
                    >
                      <span>Send code via SMS</span>
                    </button>
        </div>
    );
};

export default Page;