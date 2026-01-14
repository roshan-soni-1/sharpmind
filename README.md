<div align="center">
  <h1>Mind Calculation</h1>
  
  <p>
    <strong>Train your brain with fast-paced mental arithmetic challenges.</strong>
  </p>

  <p>
    <a href="https://react.dev/">
      <img src="https://img.shields.io/badge/Made%20with-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    </a>
    <a href="https://tailwindcss.com/">
      <img src="https://img.shields.io/badge/Styled%20with-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    </a>
    <a href="https://vitejs.dev/">
      <img src="https://img.shields.io/badge/Powered%20by-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    </a>
    <a href="https://opensource.org/licenses/MIT">
      <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License" />
    </a>
  </p>

  <p>
    <a href="#features">Features</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#configuration">Configuration</a> •
    <a href="#license">License</a>
  </p>

  <br />

  </div>

<br />

## 📖 About The Project

**Sharpmind** is a modern, responsive web application designed to gamify mental math. Users race against the clock to solve arithmetic problems, with a focus on improving speed and accuracy. The app features a beautiful, distraction-free UI that adapts to your system preferences.

---

## ✨ Key Features

- **⚡ Fast-Paced Gameplay:** Test your skills with infinite generated math problems.
- **🎨 Dynamic Themes:** Seamless **Dark Mode** & **Light Mode** toggle with persistent storage.
- **⚙️ Custom Settings:** Adjust difficulty, bonus time, and game mechanics.
- **💾 Local Persistence:** Profiles and high scores are saved automatically to your browser—no login required.
- **📱 Fully Responsive:** Optimized experience for Desktop, Tablet, and Mobile devices.

---

## 🛠️ Tech Stack

- **Frontend Framework:** [React](https://react.dev/) (Vite)
- **Styling Engine:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **State Management:** React Hooks & LocalStorage

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mind-calculation.git
   cd mind-calculation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
src/
├── components/       # 🧩 Reusable UI components (Buttons, Layouts)
├── pages/            # 📄 Main application views (Home, Game, Settings)
├── App.jsx           # 🚦 Main entry point and routing logic
├── index.css         # 🎨 Tailwind directives and global styles
└── main.jsx          # ⚛️ React DOM rendering
```

---

## ⚙️ Configuration

### 🌑 Dark Mode
This project uses a **FOUC-free** (Flash of Unstyled Content) dark mode implementation. 
- The logic is injected directly into `index.html` via a `<script>` tag in the `<head>`.
- It reads `localStorage` before the DOM paints to ensure the correct theme is applied instantly.

### 🎨 Tailwind v4
We utilize the latest **Tailwind CSS v4**.
- No `tailwind.config.js` is required for standard use.
- Configuration is handled via CSS variables in `@theme` blocks inside `index.css`.
- Dark mode is activated via the custom variant: `@variant dark (&:where(.dark, .dark *));`.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
>This file is ai generated
<div align="center">
  <p>Developed with ❤️ by <strong>Roshan Soni</strong></p>
</div>
