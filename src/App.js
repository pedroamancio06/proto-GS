import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import MonitoringDashboard from './pages/MonitoringDashboard';
import AddResidue from "./components/AddResidue";
import NavBar from "./components/NavBar";
import './styles/App.css'

function App() {
  return (
    <BrowserRouter >
        <NavBar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<MonitoringDashboard />} />
            <Route path="/about"element={<About />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
