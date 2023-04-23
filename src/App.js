import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Service from './routes/Service';
import Contact from './routes/Contact';
import AboutUs from './routes/AboutUs';
import Navbar from './navbar-dropdown-main/Navbar';
import ThermalCalibration from './routes/ThermalCalibration';
import MechanicalCalibration from './routes/MechanicalCalibration';
import MechanicalInstrumentsRepair from './routes/MechanicalInstrumentsRepair';
import SupplyMeasuringInstrumentsGauges from './routes/SupplyMeasuringInstruments-Gauges';

function App() {
  return (
    <div className="App">
      <div>
        
      <Navbar></Navbar>
      </div>
      <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/Services" element={<Service/>} />
        <Route path="/contactus" element={<Contact/>} />
        <Route path="/Contactus" element={<Contact/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Aboutus" element={<AboutUs/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/services/mech-cal" element={<MechanicalCalibration/>} />
        <Route path="/services/thermal-cal" element={<ThermalCalibration/>} />
        <Route path="/services/repair" element={<MechanicalInstrumentsRepair/>} />
        <Route path="/services/supply" element={<SupplyMeasuringInstrumentsGauges/>} />
      </Routes> 
      </div>
    </div>
  );
}

export default App;
