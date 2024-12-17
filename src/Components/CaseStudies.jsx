import React from "react";
import case1 from '../Image/caseImage1.png'
import case2 from '../Image/casestudey2.png'
import case3 from '../Image/casestudey3.png'
const CaseStudies = () => {
  const caseStudies = [
    {
      image: case1, 
      title: "Drafters King",
      description:
        "Drafters King is a fantasy sports platform that allows users to play fantasy sports with different categories. It is an online game where users create ...",
    },
    {
      image: case2, 
      title: "IPPOS",
      description:
        "It’s an On-demand service app, where users can book a horse ride from the app and pay online within the app for the ride/time slot. Also able to track ...",
    },
    {
      image: case3, 
      title: "G-Alert",
      description:
        "The concept of this app is to show nearby incidents which happened in the last 48hrs. It allows users to create an alert regarding any incident ...",
    },
  ];

  return (
    <div className="container my-5">
      {/* Title */}
      <div className="text-center mb-4">
        <h4>
          Case <span style={{ color: "#f97316" }}>Study</span>
        </h4>
        <p className="text-black fw-bold">
          We work with a wide variety of clients, from well-known international
          brands and media organizations to cutting-edge startups and
          well-funded businesses.
        </p>
      </div>

      {/* Case Study Cards */}
      <div className="row">
        {caseStudies.map((study, index) => (
          <div key={index} className="col-md-4 mb-4 ">
            <div className="card border-0 ">
              <img
                src={study.image}
                className="card-img-top"
                alt={study.title}
              />
              <div className="card-body   ">
                <h5 className="card-title  fw-bold">{study.title}</h5>
                <p className="card-text text-muted">{study.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-4">
        <button  className="btn case-btn px-4 py-2 " style={{borderRadius:"32px"}}>
          View All &gt;
        </button>
      </div>
    </div>
  );
};

export default CaseStudies;
