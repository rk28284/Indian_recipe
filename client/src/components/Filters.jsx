import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SET_FILTERS } from "../redux/actionType";

const Filters = () => {


  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [diet, setDiet] = useState("");

  const handleSearch = () => {
    dispatch(SET_FILTERS({ query, category, diet }));
  };

  return (
    <div className="p-4 flex flex-col md:flex-row items-center gap-4">
    <input
      type="text"
      placeholder="Search Recipes..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="border p-2 rounded-md w-full md:w-1/3"
    />
    <select
      className="border p-2 rounded-md"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">All Meals</option>
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
    </select>
    <select
      className="border p-2 rounded-md"
      value={diet}
      onChange={(e) => setDiet(e.target.value)}
    >
      <option value="">Any Diet</option>
      <option value="vegetarian">Vegetarian</option>
      <option value="gluten-free">Gluten-Free</option>
      <option value="low-carb">Low Carb</option>
    </select>
    <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleSearch}>
      Apply Filters ✅
    </button>
  </div>
  )
}

export default Filters;