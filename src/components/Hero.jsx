import hero from './herosec.jpg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-12 bg-gray-50">
      {/* Left Side Content */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Tamil Nadu{" "}
          <span className="text-blue-600">
            Electricity Bill Calculator
          </span>
        </h1>
        <p className="text-lg text-gray-600 mt-6 leading-relaxed">
          Simplify your electricity bill calculations with our Tamil Nadu EB
          Calculator. Designed to provide accurate estimates based on the latest
          tariff rates, this tool helps you plan and manage your monthly energy
          expenses with ease.
        </p>
        <p className="mt-4 text-gray-600">
          Take control of your power costs and make informed decisions
          effortlessly!
        </p>
        <br />
        <Link to="/calculation" className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow-lg transform hover:scale-105">
          Calculate Now
        </Link>
      </div>

      {/* Right Side Image */}
      <div className="mt-10 md:mt-0 md:w-1/2">
        <img
          src={hero}
          alt="Electricity Calculation"
          className="rounded-lg shadow-2xl object-cover w-full"
        />
      </div>
    </div>
  );
}

export default Hero;
