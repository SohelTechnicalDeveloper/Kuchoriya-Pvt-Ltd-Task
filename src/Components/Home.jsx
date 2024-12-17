import React from "react";
import "../Styles/Home.css";
import logo from "../Image/logo1.png";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="">
      <header className="bg-dark text-white">
        <nav className="navbar navbar-expand-lg navbar-dark px-5">
          <div className="navbar-brand fw-bold">
            <div className="container-fluid ">
              <img
                src={logo}
                className="mb-4 fs-4"
                height={30}
                width={50}
                alt="Logo"
              />
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav wrapper"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <Link className="nav-link text-white fw-bold" href="#company">
                  Company
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link text-white fw-bold" href="#services">
                  Services
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link text-white fw-bold"
                  href="#technologies"
                >
                  Technologies
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link text-white fw-bold" href="#portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link text-white fw-bold" href="#blogs">
                  Blogs
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="contact-item "
                  style={{ backgroundColor: "#EF6D1C" }}
                  title="Call"
                >
                  <i className="fas fa-phone"></i>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <button className="btn nav-phone">Request A Quote</button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <section className="home-banner  mb-5 ">
        <div
          className="container text-center py-5 "
          style={{
            backgroundColor: "rgba(14, 13, 13, 0.76)",
            borderRadius: "32px",
          }}
        >
          <div className="row align-items-center">
            <div className="col-md-12 text-white">
              <h1 className="display-4 fw-bold">
                Innovative Software Solutions
              </h1>
              <h2 className="fs-2">For A Changing World</h2>
              <p className="lead mt-4">
                We design software solutions that accelerate progress and adapt
                to our world's ever-changing landscape.
              </p>
              <button className="btn home-btn mt-3">Free Consulting</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
