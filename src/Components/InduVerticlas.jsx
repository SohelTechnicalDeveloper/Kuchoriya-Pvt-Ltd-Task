import React from "react";
import '../Styles/InduVerticals.css'
const IndustryVerticals = () => {

    //this are details industry verticals
  const verticals = [
    { icon: "🍔", name: "Food & Restaurants" },
    { icon: "🎮", name: "Game Developments" },
    { icon: "🏀", name: "Sports Recreation" },
    { icon: "🛒", name: "Shopping E-commerce" },
    { icon: "💪", name: "Health Fitness" },
    { icon: "🎓", name: "Education E-learning" },
    { icon: "🎬", name: "Media Entertainment" },
    { icon: "🏢", name: "Real-Estate" },
    { icon: "🚕", name: "Tour & Travels" },
    { icon: "⚙️", name: "Utility" },
    { icon: "💰", name: "Finance & Banking" },
    { icon: "📱", name: "On-Demand" },
  ];

  return (
    <section
      className="text-center text-white d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundColor: "#000",
        padding: "80px 20px",
      }}
    >
      <div className="container text-center my-5">
        <h2 className="mb-4 text-center py-2">
          Best IT Consulting Company Across Different Industry Verticals
        </h2>
        <p className="mb-5 text-white">
          We have successfully connected countless businesses with great
          software developers for bespoke development thanks to our track record
          of delivering high-quality projects under expert supervision and
          within budget. Partner with us - the premier provider of custom
          software development - to hire programmers for numerous industry
          verticals. We have a vast reach and competence across multiple
          sectors.{" "}
        </p>
        <div className="row">
          {verticals.map((item, index) => (
            <div key={index} className="col-6 col-md-3 mb-4 ">
              <div className="p-4 border border-light rounded shadow-sm indo-card">
                <div className="fs-1 mb-3 ">{item.icon}</div>
                <h5 className="mb-0">{item.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryVerticals;
