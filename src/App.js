import "./App.css";
import ContactSidebar from "./Components/ContactSidebar";
import Home from "./Components/Home";
import About from './Components/About'
import { BrowserRouter } from "react-router-dom";
import CompanyDetails from "./Components/CompanyDetails";
import Technologies from "./Components/Technologies";
import PartnershipModels from "./Components/PartnerModel";
import IndustryVerticals from "./Components/InduVerticlas";
import CaseStudies from "./Components/CaseStudies";
import Footer from "./Components/Footer";
import Locations from "./Components/Locations";
import Blogs from "./Components/Blogs";
import Cursor from "./Components/Cursor";

function App() {
  return (
    <div className="App">
      <Cursor/>
      <BrowserRouter>
        <Home />
        <ContactSidebar />
        <About/>
        <CompanyDetails/>
        <PartnershipModels/>
        <Technologies/>
        <IndustryVerticals/>
        <CaseStudies/>
        <Blogs/>
        <Locations/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
