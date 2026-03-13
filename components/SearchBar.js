"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {

  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/?search=${query}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mb-10 max-w-xl mx-auto"
    >

      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700"
      />

      <button className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700">
        Search
      </button>

    </form>
  );
}