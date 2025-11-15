MovieIsland – React Movie Search App

MovieIsland is a lightweight and responsive movie search application built using React.js and the OMDb API.
Users can search for movies by title and instantly see results with posters, release year, and type.

🚀 Features

🔍 Real-time Movie Search using OMDb API

🧩 Reusable components (MovieCard)

⚡ Fast and responsive UI

🎨 Minimal & clean design

📦 Built using React Hooks (useState, useEffect)

🛠️ Tech Stack

React.js

JavaScript (ES6+)

OMDb API

CSS

📁 Project Structure
MovieIsland/
│── public/
│── src/
│   ├── App.js
│   ├── MovieCard.jsx
│   ├── App.css
│   ├── search.svg
│   └── index.js
│── package.json
└── README.md

▶️ Getting Started
1. Clone the Repository
git clone https://github.com/your-username/MovieIsland.git
cd MovieIsland

2. Install Dependencies
npm install

3. Start the App
npm start


App will run at:
👉 http://localhost:3000

🔑 Environment / API Setup

This project uses the OMDb API.
Generate your own API Key from:
https://www.omdbapi.com/

Inside App.js, update:

const API_URL = "http://www.omdbapi.com/?apikey=YOUR_API_KEY";

📸 Screenshots

(Add screenshots if you want — I can generate sample UI mockups too.)

🧩 Core Components
App.js

Manages search input, API calls, and movie list.

Uses:

useState for data/state

useEffect for default search

MovieCard.jsx

Displays:

Movie Poster

Title

Year

Type

🌍 API Example
fetch(`${API_URL}&s=batman`)


Response includes:

Title

Year

Type

Poster

🤝 Contributing

Feel free to fork this repository and enhance the UI or add new features.
