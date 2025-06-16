import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Multifunction from "./pages/Multifunction.js";
import DayService from "./pages/DayService.js";
import Pricing from "./pages/Pricing.js";
import Access from "./pages/Access.js";
import Contact from "./pages/Contact.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/facility/multifunction" element={<Multifunction />} />
            <Route path="/facility/day-service" element={<DayService />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/access" element={<Access />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 