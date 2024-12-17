import React from "react";
import logo from "../Image/logo1.png";
import Insta from "../Image/Insta.jpeg";
import Linkedln from '../Image/linkedln.png'
import twitter from '../Image/twitter.png'
import facebook from '../Image/facebook.png'
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className=" text-white pt-5 pb-4"
      style={{
        backgroundColor: "#000",
        padding: "80px 20px",
      }}
    >
      <div className="container text-md-left">
        <div className="row text-md-left">
          {/* Left Section */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
            <img
              src={logo}
              className="mb-4"
              height={100}
              width={100}
              alt="Logo"
            />
            <p>
              Kuchoriya is an ISO 9001:2015 Certified Company with its physical
              presence in the US, India, and Australia, serving its clients
              across the globe.
            </p>
            <button
              className="btn case-btn mb-5 px-4"
              style={{ borderRadius: "35px" }}
            >
              Request a Quote
            </button>
            <div className="mt-3">
              <span className="text-warning fs-3">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              <br />
              <span className="text-warning">5 / 5</span>
              <p>5 / 5 Rated based on 300+ clients</p>
            </div>
          </div>

          {/* Services Section */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto ">
            <h5 style={{ color: "#EF6D1C" }} className="mb-4">
              Our Services
            </h5>
            <ul className="list-unstyled ">
              <li className="mb-2 footer-nav">Mobile App Development</li>
              <li className="mb-2 footer-nav">Web Development</li>
              <li className="mb-2 footer-nav">Game Development</li>
              <li className="mb-2 footer-nav">Blockchain Development</li>
              <li className="mb-2 footer-nav">OutStaffing</li>
              <li className="mb-2 footer-nav">UI/UX Design Research</li>
              <li className="mb-2 footer-nav">CTO Services</li>
              <li className="mb-0 footer-nav">Referral Partner Program</li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto ">
            <h5 style={{ color: "#EF6D1C" }} className="mb-4">
              Solutions
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2 footer-nav">E-commerce Solutions</li>
              <li className="mb-2 footer-nav">Real-estate Solutions</li>
              <li className="mb-2 footer-nav">E-learning Solutions</li>
              <li className="mb-2 footer-nav">Healthcare Solutions</li>
              <li className="mb-2 footer-nav">Fleet Management</li>
              <li className="mb-2 footer-nav">Dating Applications</li>
              <li className="mb-2 footer-nav">Insurance Solutions</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h5 style={{ color: "#EF6D1C" }} className="mb-4">
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2 footer-nav">About Us</li>
              <li className="mb-2 footer-nav">Portfolio</li>
              <li className="mb-2 footer-nav">Contact Us</li>
              <li className="mb-2 footer-nav">Blogs</li>
              <li className="mb-2 footer-nav">We are Hiring</li>
              <li className="mb-2 footer-nav">Privacy Policy</li>
              <li className="mb-2 footer-nav">Terms & Conditions</li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="row">
          <div className="col-md-6 mx-auto">
            <p>
              Sign up for the <strong>Newsletters</strong>
            </p>
            <form className="input-group">
              <input
                type="email"
                placeholder="Enter your email..."
                className="form-control "
              />
              <button className="btn text-white fw-bold  align-items-center" style={{backgroundColor:"#EF6D1C"}}>
              <FaTelegramPlane className="fs-5" />
              </button>
            </form>
          </div>
        </div>

        <hr className="bg-secondary" />
        <div className="d-flex justify-content-around">
          <div className=" text-white">
            &copy; 2024 Kuchoriya Softwares. All Rights Reserved.
          </div>
          <div className=" mt-4">
            <a href="#" className="text-white mx-2">
              <img
                src={Insta}
                height={30}
                style={{ borderRadius: "32px" }}
                alt=""
              />
            </a>
            <a href="#" className="text-white mx-2">
              <img
                src={Linkedln}
                height={30}
                style={{ borderRadius: "32px" }}
                alt=""
              />
            </a>
            <a href="#" className="text-white mx-2">
              <img
                src={twitter}
                height={30}
                style={{ borderRadius: "32px" }}
                alt=""
              />
            </a>
            <a href="#" className="text-white mx-2">
              <img
                src={facebook}
                height={30}
                style={{ borderRadius: "10px" }}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
