# My Developer Portfolio – Lucas Costa

Hi! I'm **Lucas Costa**, a passionate Computer Science student and web developer. This is my personal portfolio where I showcase the projects I've built, the skills I've developed, and the certifications I've earned. I created this site not just to share my work, but to reflect my growth, creativity, and enthusiasm for learning.

---

## 🧭 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies I Use](#technologies-i-use)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Live Examples](#live-examples)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## ✨ Introduction

I'm 26 years old and currently pursuing a degree in Computer Science. I’m driven by a desire to learn and improve every day. This portfolio is a reflection of that journey, featuring full-stack web apps, interactive UI components, and some experimental projects that pushed me out of my comfort zone.

---

## 🚀 Features

- 🎠 Dynamic project carousel using **Embla Carousel**
- 💡 Interactive skill icons with project links
- 🏅 Filterable certifications with tooltips and categories
- 🎨 Responsive design and smooth animations
- 🧩 Clean architecture using modular React components
- 🌐 Hosted online for easy access and sharing

---

## 🛠 Installation

If you’d like to run this project locally:

```bash
git clone https://github.com/lcscostadev/LcsdevPortfolio.git
cd lcscostadev-portfolio
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📖 Usage

Once the project is running:

- Scroll through to read my **About Me** section
- Browse projects in the carousel, click to open modals with full details
- View certifications by category with informative tooltips
- Click skill icons to explore my experience and related projects

---

## 🧰 Technologies I Use

This portfolio is built with some of the tools I love:

- **Next.js** (App Router, SSR)
- **React**
- **Framer** (animations)
- **Tailwind CSS** + `tailwind-merge` + `clsx`
- **Embla Carousel**
- **Radix UI** components (Tooltips, Dialogs)
- **Lucide Icons**, **React Icons**
- **TypeScript** and **JavaScript**
- **Responsive design** via `react-responsive`

---

## ⚙️ Configuration

You can personalize your own version by modifying:

- `Presentation.jsx` → About section and social links
- `Skills.jsx` → Skills and associated projects
- `Carousel.jsx` → Projects, descriptions, images, links
- `CertificationsBadge.jsx` → Certification data and filters

Feel free to swap in your own assets inside the `public/` folder.

---

## 📁 Project Structure

```
components/
├── Presentation.jsx         # About me + social links
├── Carousel.jsx             # Project showcase
├── Skills.jsx               # Animated skill icons
├── CertificationsBadge.jsx # Certification filter + display
├── embla.css                # Carousel styles
├── Header.jsx               # (optional) navigation
app/
└── page.jsx                 # Home page layout and section anchors
public/
└── (project images, profile photo, etc.)
```

---

## 🌐 Live Examples

Check out the live site and some of the featured projects:

- 🧑‍💻 [My Portfolio](https://lcscostadev-portfolio.vercel.app)
- ⚙️ [FastFreeTools.com](https://fastfreetools.com)
- 🎮 [2D Java Game](https://github.com/lcscostadev/Gramundor-Java-Game)
- 🤖 [Discord Bot GVBot](https://lcscostadev.github.io/Discord-bot-GVBot-website/)
- ✅ [Gamified Retro ToDoList](https://gamified-retro-to-do-list.vercel.app/)

---

## 🧯 Troubleshooting

If something isn’t working:

- ❌ **Images not loading?** → Make sure the paths in `/public` match exactly.
- 🎡 **Carousel issues?** → Check Embla config and CSS class bindings.
- 🧩 **UI broken?** → Make sure all Radix UI and Tailwind dependencies are installed.

Let me know via GitHub if you spot any bugs — I’m always improving things!

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE). You're welcome to explore, learn from, and even fork it for your own use. just give credit where it's due. 🙌
