import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Filters from "./components/Filters";
import { FavoritesList } from "./components/FavoritesList";
import { Dashboard } from "./pages/Dashboard";
import { SearchBar } from "./components/SearchBar";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-gray-800 shadow-lg">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
              Recipe App 🍕
            </Link>
            <div className="space-x-4">
              <Link to="/" className="text-white hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link to="/favorites" className="text-white hover:text-gray-300 transition-colors">
                Favorites ❤️
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-2 py-2">
          <div className="mb-1">
            <SearchBar />
          </div>

          <div className="mb-1">
            <Filters />
          </div>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/favorites" element={<FavoritesList />} />
          </Routes>
        </div>

        <footer className="bg-gray-800 text-white text-center py-4 mt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Recipe App. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;