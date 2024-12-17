import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Locations = () => {

  //this are location data i used this approach enhacnce functionality

  const locations = [
    {
      country: "United State",
      address: "9765 Keystone Court, Clarence, NY 14031, USA",
      phone: "+1 (650) 488-7911",
    },
    {
      country: "Canada",
      address: "1100 Caven St., Suite PH11, Mississauga, ON L5G 4N3 Canada",
      phone: "+1 (416) 726-4662, +1 (650) 488-7911",
    },
    {
      country: "Brazil",
      address:
        "Bispo César da Corso Filho, 1266, San Carlos, São Paulo, Boa Vista, Brazil, 13575-331",
    },
    {
      country: "South Africa",
      address:
        "12 IbisWay, Sunnydale Fish Hoek 7985, Western Cape, South Africa",
      phone: "+27824507091",
    },
    {
      country: "UAE",
      address:
        "118, JLT Cluster V, Al Sarayat St, opposite Damas Jewellery, Dubai United Arab Emirates Dubai 91929",
    },
    {
      country: "Italy",
      address: "Viale dell'Esperanto, 71, Formia, Italy, Lazio IT",
    },
    {
      country: "Australia",
      address:
        "Unit 14G, 3 Darling Point Road, Darling Point, Sydney, NSW, Australia, 2027",
    },
  ];

  return (

    //this are section for locations
    <section className="py-5 text-center">
      <h2 className=" mb-4 fw-bold" style={{ color: "#EF6D1C" }}>
        We are all over the world
      </h2>
      <div className="container">
        <div className="row">
          {locations.map((loc, index) => (
            <div key={index} className="col-md-2 mb-4">
              <h5>
                <FaLocationDot /> &nbsp;
                <span className="fw-bold">{loc.country}</span>
              </h5>
              <p className="text-muted mb-0">{loc.address}</p>
              {loc.phone && <p className="text-muted">{loc.phone}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
