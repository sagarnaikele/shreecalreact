import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Service from './routes/Service';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes> 




    </div>
  );
}

export default App;
