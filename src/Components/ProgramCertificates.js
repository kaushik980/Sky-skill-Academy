import React from "react";
import "./ProgramCertifficate.css";
import certificate from "../Assets/Certificate.png"

function ProgramCertifficate() {
  return (
    <div className="Certificate-container">
      <header className="Certificate-header">
        <h1>Program Certificates</h1>
        <nav className="nav">
          <button className="nav-first-btn">E&ICT IIT Guwahati</button>
          <button className="nav-btn">Internship</button>
          <button className="nav-btn">Skyy Skill</button>
          <button className="nav-btn">LOR</button>
        </nav>
      </header>

      <section className="certificate-section">
        <div className="certificate-image">
          <img src={certificate} alt="Certificate" />
        </div>

        <div className="certificate-info">
          <h2 className="certificate-heading">Post Graduation Certification From E&ICT <br/> Academy, IIT Guwahati</h2>
          <p>
          Upon successfully completing this program, you’ll earn an Post Graduation <br/> Certiification in MERN Stack Development that is jointly offered by E&ICT Academy, IIT<br/> Guwahati as the Knowledge Partner.
          </p>
          <ul>
            <li>Mentorship sessions & Classes by IIT G faculties</li>
            <li>Mentorship sessions & Classes by IIT G faculties</li>
            <li>Mentorship sessions & Classes by IIT G faculties</li>
            <li>Mentorship sessions & Classes by IIT G faculties</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ProgramCertifficate;
