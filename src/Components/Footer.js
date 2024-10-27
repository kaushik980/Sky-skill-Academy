import React from 'react';
import './Footer.css'; // Make sure to import the correct CSS file

const Footer = () => {
  return (
    <div>
      <footer className="footer-btm">
        <p className="footer-query">
          Still have queries? <span>Contact Us</span>
        </p>
        <p className="footer-para">
          Request a callback. An expert from the admission office will call you
          <br /> in the next 24 working hours.
        </p>
        <p className="contact-info">
          You can also reach out to us at <span className='contact'>info@skyyskill.com</span> or <span className='contact'>8800889353</span>
        </p>
        <button className="callback-btn">Request a Callback</button>
        <div className="copyright">
        © 2011-2024 <span>SkyySkill Academy</span> - All Rights Reserved.
      </div>
      </footer>
     
    </div>
  );
};
export default Footer;
