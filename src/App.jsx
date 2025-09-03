import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <MovieRow title="Trending Now" fetchUrl="/trending/movie/week" />
      <MovieRow title="Top Rated" fetchUrl="/movie/top_rated" />
      <MovieRow title="Action Movies" fetchUrl="/discover/movie?with_genres=28" />
      <MovieRow title="Upcomming" fetchUrl="/movie/upcoming" />
      <Footer />
    </div>
  );
}
