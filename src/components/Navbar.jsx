export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-4 fixed w-full bg-black bg-opacity-80 z-10">
      <img src="/assets/netflix-logo.png" alt="Netflix Logo" className="w-28" />
      <nav className="hidden md:flex space-x-6">
        <a href="#">Home</a>
        <a href="#">TV Shows</a>
        <a href="#">Movies</a>
        <a href="#">New & Popular</a>
        <a href="#">My List</a>
      </nav>
      <button className="bg-red-600 px-4 py-2 rounded">Sign In</button>
    </header>
  );
}
