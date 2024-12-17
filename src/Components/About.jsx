import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../Image/about.png";
import card1 from "../Image/card1.png";
import card2 from "../Image/Card2.png";
import card3 from "../Image/card3.png";
import card4 from "../Image/card4.png";
import card5 from "../Image/card5.png";
import card6 from "../Image/card6.png";
import card7 from "../Image/card7.png";
import card8 from "../Image/card8.png";
import card9 from "../Image/card9.png";
const CompanyStats = () => {
  const services = [
    {
      title: "Our Services",
      subtitle:
        "We bring your ideas to life with our high-quality web and mobile app development services.",
      imgClass: card1,
    },
    {
      title: "Web Development",
      subtitle:
        "Our customized web development services help your business craft interactive and engaging web experiences for customers.",
      imgClass: card2,
    },
    {
      title: "Mobile App Development",
      subtitle:
        "Custom mobile app solutions for all platforms and devices can revolutionize your business.",
      imgClass: card3,
    },
    {
      title: "UI/UX Design",
      subtitle:
        "Our skilled UI/UX designers produce cutting-edge, responsive interfaces that improve your brand and simplify user interactions.",
      imgClass: card4,
    },
    {
      title: "Blockchain Development",
      subtitle:
        "Our blockchain knowledge is unmatched, from developing Smart Contracts to creating decentralized apps.",
      imgClass: card5,
    },
    {
      title: "Quality Analysis",
      subtitle:
        "Customized Hybrid testing solutions that are specifically tailored to fit your needs for the best outcomes.",
      imgClass: card6,
    },
    {
      title: "Product Development",
      subtitle:
        "End-to-end product development services to bring your innovative ideas to market quickly and efficiently.",
      imgClass: card7,
    },
    {
      title: "Digital Marketing",
      subtitle:
        "Innovative digital marketing solutions to boost your online presence and drive meaningful engagement.",
      imgClass: card8,
    },
    {
      title: "CTO Services",
      subtitle:
        "Expert CTO services to provide strategic technical direction and leadership for your business.",
      imgClass: card9,
    },
  ];
  return (
    <div>
      <div className="container mt-5 ">
        <div className="row align-items-center">
          {/* Left Image Section */}
          <div className="col-md-6 mb-4">
            <img
              src={image1}
              alt="Company Team"
              className="img-fluid rounded"
            />
          </div>

          {/* Right Content Section */}
          <div className="col-md-6 text-start">
            <h2 className="text-danger mb-3 ">Kuchoriya Softwares</h2>
            <p className="fw-semibold">
              Since our founding in 2009, we have grown to become a recognized
              global brand by serving more than 1000 clients, and we are proud
              to offer full-range, end-to-end development and designing
              solutions..
            </p>
            <button className="btn  read-btn">Read More..</button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="row text-center mt-5">
          {/* Card 1 */}
          <div className="col-md-2 mb-3 rotate-center">
            <div className="p-3 border rounded card-style">
              <h4 style={{ color: "#EF6D1C" }}>15+</h4>
              <p>Years Experience</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-2 mb-3 rotate-center">
            <div className="p-3 border rounded card-style">
              <h4 style={{ color: "#EF6D1C" }}>230+</h4>
              <p>Talented Squads</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-2 mb-3 rotate-center">
            <div className="p-3 border rounded card-style">
              <h4 style={{ color: "#EF6D1C" }}>400+</h4>
              <p>Apps Developed</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-2 mb-3 rotate-center">
            <div className="p-3 border rounded card-style">
              <h4 style={{ color: "#EF6D1C" }}>700+</h4>
              <p>Projects Delivered</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-2 mb-3 rotate-center">
            <div className="p-3 border rounded card-style">
              <h4 style={{ color: "#EF6D1C" }}>50+</h4>
              <p>Countries Served</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-2 mb-3 rotate-center ">
            <div className="p-3 border rounded card-style">
              <h4 style={{ color: "#EF6D1C" }}>300+</h4>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <h2 className="text-center mb-4 fw-bold">What we do best</h2>
          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-12 col-md-6 col-lg-4">
                <div
                  className={`card h-100 shadow-sm border-0  ${service.imgClass}`}
                  style={{
                    borderRadius: "10px",
                    backgroundImage: `url(${service.imgClass})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="card-body d-flex flex-column justify-content-center align-items-center card-color text-center">
                    <h5
                      className="card-title fw-bold mb-3 "
                      style={{ color: "#EF6D1C" }}
                    >
                      {service.title}
                    </h5>
                    <p className="card-text  fw-semibold">{service.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStats;
