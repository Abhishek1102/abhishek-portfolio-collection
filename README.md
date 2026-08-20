# 🚀 Abhishek Panchmiya — Developer Portfolio

A modern, interactive developer portfolio built with **React + TypeScript + Vite**, showcasing mobile apps, projects, skills, and professional experience.

---

## ✨ Features

- **Multi-tab layout** — About, Portfolio, Resume, and Contact sections in a single-page app
- **Screenshot galleries** — Per-project image galleries with fullscreen lightbox viewer
- **Play Store links** — Direct links to published Android apps
- **Responsive design** — Optimized for desktop and mobile screens
- **Confetti animation** — Fun interactive effect on the About tab
- **TypeScript data layer** — All portfolio content managed from a single `portfolioData.ts` file
- **Dark-themed aesthetic** — Professional dark UI with accent colors

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 |
| **Language** | TypeScript 6 |
| **Build Tool** | Vite 8 |
| **Icons** | Lucide React |
| **Animation** | canvas-confetti |
| **Linting** | OxLint |
| **Styling** | Vanilla CSS (custom properties) |
| **Data** | Static TypeScript constants (`portfolioData.ts`) |

---

## 📁 Project Structure

```
abhishek-portfolio/
├── index.html              # Main HTML shell
├── src/
│   ├── main.tsx            # React entry point
│   ├── App.tsx             # Root app component
│   ├── index.css           # Global styles & design tokens
│   ├── App.css             # App-level styles
│   ├── data/
│   │   └── portfolioData.ts # All portfolio content (projects, skills, education, etc.)
│   ├── components/         # React components
│   └── assets/             # Static assets
├── public/
│   ├── screenshots/        # App screenshot images per project
│   ├── favicon.svg
│   └── icons.svg
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 📱 Featured Projects

| App | Platform | Description |
|---|---|---|
| **SmartBill AI** | Flutter (Android) | AI-powered receipt scanner using Gemini Flash — extracts merchant, date, amount & category instantly |
| **Listening Eyes** | Flutter (Android) | Accessibility app that reads text aloud from camera using OCR + TTS |
| **Tally Helper** | Flutter (Android) | Smart Tally ERP companion for faster invoicing and stock management |
| **Kisan Mitra** | Flutter (Android) | Agri-tech app for farmers with crop advisories and market prices |
| **Quiz App** | Android (Kotlin) | Engaging quiz application with multiple categories and score tracking |
| **Expense Tracker** | Flutter | Personal finance tracker with category-wise expense breakdown |
| **Weather App** | Flutter | Real-time weather app using OpenWeather API |
| **Notes App** | Flutter | Clean note-taking app with local storage |

---

## 🧑‍💻 About the Developer

**Abhishek Savaliya** — Flutter & Android Developer  
📍 Rajkot, Gujarat, India  
🎓 B.Tech in Computer Engineering — Atmiya Institute of Technology & Science (2021–2025)

**Skills:** Flutter · Dart · Android (Kotlin/Java) · Firebase · REST APIs · Git · Figma · AI/ML Integration

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Abhishek1102/abhishek-portfolio-collection.git
cd abhishek-portfolio-collection

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder, ready to deploy to GitHub Pages, Vercel, or Netlify.

### Preview Production Build

```bash
npm run preview
```

---

## 📸 Screenshots

App screenshots are stored in `public/screenshots/` and are automatically loaded in the Portfolio section's image gallery.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

> Built with ❤️ by [Abhishek Savaliya](https://github.com/Abhishek1102)
