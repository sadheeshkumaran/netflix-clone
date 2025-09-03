# 🎬 Netflix Clone  

A **frontend-only Netflix landing page clone** built with **React, Vite, Tailwind CSS, and TMDB API**.  
This project mimics the Netflix UI with a dynamic hero banner and scrollable rows of movies fetched from the TMDB API.  

---

## 🚀 Tech Stack
- **React + Vite** – Frontend framework & fast build tool  
- **Tailwind CSS** – Utility-first styling for responsive UI  
- **Fetch API** – Native data fetching  
- **TMDB API** – Provides real movie data  

---

## ✨ Features
- 🎥 Netflix-style **Navbar**  
- 🎬 **Hero section** with random featured movie  
- 📂 **Scrollable movie rows** (Trending, Top Rated, Action, Upcoming, etc.)  
- 📱 Fully **responsive design**  
- ⚡ Fast setup with **Vite + Tailwind**  

---

## 📂 Project Structure
```
netflix-clone/
├── public/
│ └── assets/ (logo, banner)
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Hero.jsx
│ │ ├── MovieRow.jsx
│ │ └── Footer.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .env
├── package.json
└── README.md

```
---

## 1. 🔑 Setup & Installation

1. **Clone the repo**
```bash
git clone https://github.com/YOUR-USERNAME/netflix-clone.git
cd netflix-clone
```
## 2. Install dependencies
```bash
npm install
```
## 3. Get a TMDB API key
* Create an account at TMDB
* Go to Settings > API → Generate API Key (v3 auth)
## 4. Create `.env` file

```bash
VITE_TMDB_API_KEY=your_api_key_here
```

## 5. Run the project
```bash
npm run dev
```

## 🌍 Deployment

You can deploy easily with:

* Netlify (one-click deploy for Vite projects)
* Vercel (best for React apps)

## 📸 Screenshots
![Screen shot]()
![Screen shot]()

## 🎯 Future Improvements

* 🔍 Add movie search bar
* 🎞 Hover effects with movie details overlay
* 🎬 Play trailers using YouTube API

## 📜 License

`This project is for educational purposes only. All movie data is provided by TMDB`.
