import React from "react";

const CompanyDetails = () => {
  return (
    <div>
      <section
        className="text-center text-white d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundColor: "#000",
          padding: "80px 20px",
        }}
      >
        <h4 className="fw-bold mb-3">Transforming Businesses With</h4>
        <h4 className=" fw-bold mb-4" style={{ color: "#EF6D1C" }}>
          Top-Ranked Web and Mobile App Development Company
        </h4>
        <p className="mb-4" style={{ maxWidth: "700px", lineHeight: "1.8" }}>
          We’ve worked with hundreds of startups, small-medium enterprises and
          top brands, empowering them with our digital intelligence and
          expertise. We deliver the right business outcomes 5X faster than our
          competitors and help our clients monetize more effectively.
        </p>
        <button
          className="btn read-btn px-4 py-2 fw-bold"
          style={{ color: "#fff" }}
        >
          Get a quote
        </button>
      </section>

      <section className="text-center py-5 mb-5" style={{ backgroundColor: "#fff" }}>
        <h2 className="fw-bold mb-4">
          Know How we{" "}
          <span style={{ color: "#EF6D1C" }}>Collaborate with our Clients</span>
        </h2>
        <p
          className="text-black fw-bold mx-auto"
          style={{ maxWidth: "900px", lineHeight: "1.8" }}
        >
          We’re always excited to listen to new ideas from clients and as one of
          the largest mobile app development and web development companies
          worldwide, we create new levels of value through client’s businesses.
          Here’s how we work together with our clients as one across different
          time zones.
        </p>
        
      </section>
    </div>
  );
};

export default CompanyDetails;
