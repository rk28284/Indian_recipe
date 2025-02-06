import React, { useState } from 'react'
import {fetchRecipes} from "../redux/action"
import {useDispatch} from "react-redux"

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchRecipes(query));
  };
  return (
    <div className="flex gap-2 mb-4">
    <input
      type="text"
      placeholder="Search for recipes..."
      className="border p-2 w-full rounded-md"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    <button
      onClick={handleSearch}
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      Search
    </button>
  </div>  )
}



