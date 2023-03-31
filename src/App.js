import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Service from './routes/Service';
import Contact from './routes/Contact';
import AboutUs from './routes/AboutUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/Service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Aboutus" element={<AboutUs/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        
      </Routes> 
    </div>
  );
}

export default App;
