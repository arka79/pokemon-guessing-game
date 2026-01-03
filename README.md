# POKE - The Guessing Game 🎮

A full-stack "Who's That Pokémon?" web application. This project uses a **Node.js/Express** backend to fetch data from the PokéAPI and a **Vanilla JavaScript** frontend to provide an interactive gaming experience.

---

## 🚀 Features
* **Silhouette Challenge:** Pokémon are displayed as black silhouettes until a guess is made.
* **Dynamic Multiple Choice:** The backend generates one correct answer and three random decoys for every round.
* **Smooth Transitions:** CSS animations handle the "reveal" effect.
* **Full-Stack Architecture:** Separates game logic (backend) from UI rendering (frontend).

---

## 🛠️ Tech Stack
* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **API:** [PokéAPI]
* **Libraries:** Axios, CORS, Dotenv 

---

## 📂 Project Structure
```text
pokemon-game/
├── frontend/                # Frontend UI
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── backend/                # Backend API
│   ├── server.js
│   ├── .env               # Environment variables
│   └── package.json
└── README.md