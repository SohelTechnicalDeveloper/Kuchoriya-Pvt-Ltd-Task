import React from "react";

const 
PartnershipModels = () => {
  const models = [
    {
      title: "Fixed Price Project",
      description:
        "We offer skilled resources and time estimates to collaborate with you on your project at a fixed price.",
    },
    {
      title: "Hosted Team Extension",
      description:
        "We provide knowledgeable experts who can collaborate remotely with your team on your project, which is one method to boost its effectiveness.",
    },
    {
      title: "Dedicated Team Model",
      description:
        "We provide you with a specialized team of designers, developers, project managers, and quality assurance specialists who will collaborate for at least three months to complete your project.",
    },
  ];

  return (
    <section
    className="text-center text-white d-flex flex-column justify-content-center align-items-center"
    style={{
      backgroundColor: "#000",
      padding: "80px 20px",
    }}
  >
    <div className="container my-5 text-center text-white ">
      <h2 className=" mb-3">
        <span  style={{ color: "#EF6D1C" }}>Partnership Models</span>
      </h2>
      <p className="mb-4">
        We offer collaboration that is tailored to your needs. We provide
        everything you need, whether you need a single developer or a
        full-fledged project team. Our three partnership models were specially
        developed to meet the particular needs of businesses and increase client
        revenues.
      </p>

      {/* Card Section */}
      <div className="row justify-content-center">
        {models.map((model, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 p-4 shadow">
              <div className="card-body">
                <h5 className="card-title  fw-bold" style={{ color: "#EF6D1C" }}>
                  {model.title}
                </h5>
                <p className="card-text text-black">{model.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-4">
        <button  className="btn  home-btn  px-4 py-2 fw-bold text-white" style={{borderRadius:"32px"}}>
          Let's Discuss
        </button>
      </div>
    </div>
    </section>
  );

};

export default PartnershipModels;
