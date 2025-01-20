import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./Hero";
import Table from "./Table";
import Calculation from "./Calculation";

function Home() {
  return (
    <Router>
      <div className="bg-slate-100 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Navbar */}
          <nav className="py-6 flex items-center justify-between">
            <h1 className="text-3xl font-extrabold text-blue-700">EB Calculator</h1>
            <div className="flex space-x-16 text-lg font-medium text-gray-700">
              <Link to="/" className="hover:text-blue-500 transition duration-300">
                Home
              </Link>
              <Link to="/table" className="hover:text-blue-500 transition duration-300">
                Table
              </Link>
              <Link to="/calculation" className="hover:text-blue-500 transition duration-300">
                Calculation
              </Link>
            </div>
          </nav>

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
