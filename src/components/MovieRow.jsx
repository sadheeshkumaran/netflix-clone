import { useEffect, useState } from "react";

export default function MovieRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";

 useEffect(() => {
  const url =
    fetchUrl.includes("?")
      ? `${BASE_URL}${fetchUrl}&api_key=${API_KEY}`
      : `${BASE_URL}${fetchUrl}?api_key=${API_KEY}`;

  fetch(url)
    .then(res => res.json())
    .then(data => setMovies(data.results || []));
}, [fetchUrl]);

  return (
    <section className="px-8 py-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
        {movies.map(movie => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-40 rounded-lg transition-transform duration-300 hover:scale-110"
          />
        ))}
      </div>
    </section>
  );
}
