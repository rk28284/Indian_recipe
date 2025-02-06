import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import Filters from "./components/Filters";
import { FavoritesList } from "./components/FavoritesList";
import { Dashboard } from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <div className="p-4">
        {/* Navbar */}
        <nav className="flex justify-between items-center bg-gray-800 p-4 rounded-md text-white">
          <Link to="/" className="text-xl font-bold">Recipe App 🍕</Link>
          <div>
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/favorites">Favorites ❤️</Link>
          </div>
        </nav>

       <Filters />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/favorites" element={<FavoritesList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
