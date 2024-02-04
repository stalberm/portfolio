import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  // Function to handle CAPTCHA success
  const handleCaptchaSuccess = () => {
    // Triggered when the CAPTCHA is successfully completed
    setShowEmail(true);
  }
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#36454F]'>Contact</h1>
      <div>
        {showEmail ? (
          <p>Email: your.email@example.com</p>
        ) : (
          <div>
            {/* Add your CAPTCHA component here */}
            <p className='text-center text-[#36454F]'>Complete the CAPTCHA to reveal the email address.</p>
            <div className='flex justify-center'>
              <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={handleCaptchaSuccess}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact