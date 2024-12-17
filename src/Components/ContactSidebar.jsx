import React from "react";
import "../Styles/ContaSidebar.css"; 
import { Link } from "react-router-dom";

const ContactSidebar = () => {
  return (
    <div className="contact-sidebar  ">
      <div className="contact-tab">GET IN TOUCH</div>

      {/* Icons */}
      <div className="contact-icons mx-3">
        <Link  className="contact-item " style={{backgroundColor:"#DC3545"}} title="Call">
          <i className="fas fa-phone"></i>
        </Link>
        <Link  className="contact-item " style={{backgroundColor:"#108907"}} title="WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </Link>
        <Link  className="contact-item blue-bg" title="Skype">
          <i className="fab fa-skype"></i>
        </Link>
        <Link  className="contact-item orange-bg" title="Scroll Up">
          <i className="fas fa-chevron-up"></i>
        </Link>
      </div>
    </div>
  );
};

export default ContactSidebar;
