import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Multifunction from "./pages/Multifunction.jsx";
import DayService from "./pages/DayService.jsx";
import Pricing from "./pages/Pricing.jsx";
import Access from "./pages/Access.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

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