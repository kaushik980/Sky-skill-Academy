import React from 'react';
import './Home.css';
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import logo from "../Assets/skyy-lo-new.png"
import netflix from "../Assets/Netflix-Logo.png"
import linkedin from "../Assets/Linkedin.png"
import microsoft from "../Assets/Microsoft.png"
import google from "../Assets/Google-Logo.png"
import capgemini from "../Assets/Capgemini-Logo.png"
import tcs from "../Assets/TCS-Logo.png"
import pwc from "../Assets/PwC.png"
import IIT from "../Assets/IIT-Guwahati.png"
import asdc from "../Assets/asdc.png"


function Home() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo}alt="Skyy Skill Academy" className="logo" />
        <button className="demo-button">Book a Free Demo</button>
      </header>
      <div className="main-content">
        <div className="program-info">
        <button className="placement-button">100% Placement Guarantee</button>
          <h3 className="heading1">Post Graduation Program on Full Stack Web Development with <span>Python/Java</span></h3>
          <button className="learn-button">Learn in Hindi</button>
          <div className='certificate-container'>
            <span className='certificate-img'>Certificate Partners:- </span>
           <img src={IIT} alt="Certificate Partners" />
           <img src={asdc} alt="Certificate Partners" />
           </div>
          <p className="batch-info"> <FaCalendarAlt />  Next Batch starts from <span>22 April, 2024</span></p>
          <ul className='listitems'>
          <FaRegCheckCircle className='icons' /> Live / Offline / Hybrid Mode Choose as per your convenience <br/>
          <FaRegCheckCircle  className='icons'/> 25% Industry Complying Skills Grow Exponentially <br/>
          <FaRegCheckCircle  className='icons'/> Globally Accepted Certificate by ASDC (Skill India) & IIT Guwahati <br/>
          <FaRegCheckCircle className='icons'/> LOR & Internship Letter No Career Break <br/>
          </ul>
          <button className="explore-button">Explore All Programs</button>
        </div>
        
        <form className="registration-form">
  <div className="form-group">
    <label htmlFor="name">Name <span className="required">*</span></label>
    <input type="text" id="name" name="name" required />
  </div>

  <div className="form-group">
    <label htmlFor="email">Email <span className="required">*</span></label>
    <input type="email" id="email" name="email" required />
  </div>

  <div className="form-group">
    <label htmlFor="phone">Phone <span className="required">*</span></label>
    <input type="tel" id="phone" name="phone" required />
  </div>

  <div className="form-group">
    <label htmlFor="education">Education Qualification <span className="required">*</span></label>
    <input type="text" id="education" name="education" required />
  </div>

  <div className="form-group">
    <label htmlFor="year">Year of Pass Out <span className="required">*</span></label>
    <input type="text" id="year" name="year" required />
  </div>

  <button type="submit" className="submit-btn">Submit</button>
</form>

      </div>

      <footer className="footer">
        <p className='ylw'>10 Months Program: 100% Live Sessions & Offline Sessions</p>
        <div className="stats">
          <div className='heading2'><span className='Clr'>200+</span> <br/> Hiring Partners</div>
          <div className='heading2'><span  className='Clr'>4 LPA</span> <br/>  Avg Salary</div>
          <div className='heading2'><span  className='Clr'>50+</span><br/>  Instructors</div>
          <div className='heading2'><span  className='Clr'>1000+</span> <br/>  Students Placed</div>
        </div>
        <div className="partners-logos">
  <h2 className="partners-heading">Our learners got placed in</h2>
  <div className="logos-container">
    <img src={netflix} alt="Netflix" />
    <img src={linkedin} alt="LinkedIn" />
    <img src={microsoft} alt="Microsoft" />
    <img src={google} alt="Google" />
    <img src={capgemini} alt="Capgemini" />
    <img src={tcs} alt="TCS" />
    <img src={pwc} alt="PWC" />
  </div>
</div>

      </footer>
    </div>
  );
}

export default Home;