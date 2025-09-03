import { useEffect, useState } from "react";

export default function Hero() {
  const [movie, setMovie] = useState(null);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        const random =
          data.results[Math.floor(Math.random() * data.results.length)];
        setMovie(random);
      });
  }, []);

  return (
    <section
      className="h-[90vh] flex items-center bg-cover bg-center px-8"
      style={{
        backgroundImage: movie
          ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          : "url('/assets/banner.jpg')",
      }}
    >
      <div className="max-w-xl bg-black bg-opacity-50 p-6 rounded">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {movie?.title || "Loading..."}
        </h1>
        <p className="text-lg mb-6 line-clamp-3">{movie?.overview}</p>
        <div className="space-x-4">
          <button className="bg-red-600 px-6 py-3 text-lg rounded">Play</button>
          <button className="bg-gray-700 px-6 py-3 text-lg rounded">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}
