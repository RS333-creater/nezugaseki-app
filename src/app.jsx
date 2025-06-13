// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Multifunction from "./pages/Multifunction";
import DayService from "./pages/DayService";
import Pricing from "./pages/Pricing";
import Access from "./pages/Access";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
