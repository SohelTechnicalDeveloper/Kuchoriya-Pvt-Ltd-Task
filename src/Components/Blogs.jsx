import React from "react";
import Blog1 from "../Image/Blog1.png";
import Blog2 from "../Image/Blog2.png";
import Blog3 from "../Image/Blog3.png";
const Blogs = () => {
  const Blogs = [
    {
      image: Blog1,
      title: "Drafters King",
      description:
        "Drafters King is a fantasy sports platform that allows users to play fantasy sports with different categories. It is an online game where users create ...",
    },
    {
      image: Blog2,
      title: "IPPOS",
      description:
        "It’s an On-demand service app, where users can book a horse ride from the app and pay online within the app for the ride/time slot. Also able to track ...",
    },
    {
      image: Blog3,
      title: "G-Alert",
      description:
        "The concept of this app is to show nearby incidents which happened in the last 48hrs. It allows users to create an alert regarding any incident ...",
    },
  ];

  return (
    <section
      className="text-center text-white d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundColor: "#F4F9FF",
        padding: "80px 20px",
      }}
    >
      <div className="container my-5">
        <div className="text-center mb-4">
          <h4>
            <span style={{ color: "#f97316" }}>Latest Blog</span>
          </h4>
          <p className="text-black fw-bold">
            We work with a wide variety of clients, from well-known
            international brands and media organizations to cutting-edge
            startups and well-funded businesses.
          </p>
        </div>

        <div className="row">
          {Blogs.map((study, index) => (
            <div key={index} className="col-md-4 mb-4 ">
              <div className="card border-0 ">
                <img
                  src={study.image}
                  className="card-img-top img-fluid"
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

        <div className="text-center mt-4">
          <button
            className="btn case-btn px-4 py-2 "
            style={{ borderRadius: "32px" }}
          >
            View All &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
