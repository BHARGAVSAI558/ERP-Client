import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const App = () => {
  const [currentPage, setCurrentPage] = useState("profile");

  const ProfilePage = () => (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="rounded-full mx-auto mb-4"
      />
      <h1 className="text-3xl font-bold text-center mb-4">John Doe</h1>
      <p className="text-gray-700 text-center mb-6">
        Full Stack Developer | React Enthusiast
      </p>
      <div className="space-y-4">
        <p>
          <strong>Email:</strong> john.doe@example.com
        </p>
        <p>
          <strong>Location:</strong> New York, NY
        </p>
        <p>
          <strong>Skills:</strong> React, Node.js, JavaScript, HTML, CSS
        </p>
        <p>
          <strong>About Me:</strong> Passionate developer with 5 years of
          experience in creating responsive and user-friendly web applications.
        </p>
      </div>
    </div>
  );

  const LinksPage = () => (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">
        My Professional Links
      </h2>
      <div className="space-y-4">
        <a
          href="https://github.com/johndoe"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300"
        >
          GitHub Profile
        </a>
        <a
          href="https://linkedin.com/in/johndoe"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300"
        >
          LinkedIn Profile
        </a>
        <a
          href="https://example.com/certification"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300"
        >
          React Developer Certification
        </a>
        <a
          href="https://johndoe-portfolio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300"
        >
          Portfolio Website
        </a>
      </div>
    </div>
  );

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">Personal Profile</h1>
            <div className="space-x-4">
              <Link
                to="/"
                className={`text-white hover:text-blue-200 ${
                  currentPage === "profile" ? "font-bold" : ""
                }`}
                onClick={() => setCurrentPage("profile")}
              >
                Profile
              </Link>
              <Link
                to="/links"
                className={`text-white hover:text-blue-200 ${
                  currentPage === "links" ? "font-bold" : ""
                }`}
                onClick={() => setCurrentPage("links")}
              >
                Links
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/links" element={<LinksPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
