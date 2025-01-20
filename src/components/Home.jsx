import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Hero from "./Hero";
import Table from "./Table";
import Calculation from "./Calculation";

function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router>
      <div className="bg-slate-100 min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          {/* Navbar */}
          <nav className="py-6 flex items-center justify-between">
            <h1 className="text-3xl font-extrabold text-blue-700">EB Calculator</h1>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8 md:space-x-16 text-lg font-medium text-gray-700">
              <Link 
                to="/" 
                className="hover:text-blue-500 transition duration-300"
              >
                Home
              </Link>
              <Link 
                to="/table" 
                className="hover:text-blue-500 transition duration-300"
              >
                Table
              </Link>
              <Link 
                to="/calculation" 
                className="hover:text-blue-500 transition duration-300"
              >
                Calculation
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </nav>

          {/* Mobile menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-slate-100 p-4 rounded-lg shadow-md`}>
            <Link 
              to="/" 
              className="block py-2 px-4 text-lg font-medium text-gray-700 hover:text-blue-500"
            >
              Home
            </Link>
            <Link 
              to="/table" 
              className="block py-2 px-4 text-lg font-medium text-gray-700 hover:text-blue-500"
            >
              Table
            </Link>
            <Link 
              to="/calculation" 
              className="block py-2 px-4 text-lg font-medium text-gray-700 hover:text-blue-500"
            >
              Calculation
            </Link>
          </div>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/table" element={<Table />} />
            <Route path="/calculation" element={<Calculation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Home;
