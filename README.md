<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,100:0f766e&height=170&section=header&text=browser%20pointer%20capture%20lab&fontSize=36&fontColor=ffffff&animation=twinkling" alt="Animated wave header"/></p>
<p align="center"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=2800&pause=900&color=14B8A6&center=true&vCenter=true&width=760&lines=browser%20pointer%20capture%20lab%20%7C%20inspect%2C%20understand%2C%20improve" alt="Animated title"/></p>
<p align="center"><img src="https://img.shields.io/github/license/CyberLoop-dev/browser-pointer-capture-lab?style=for-the-badge" alt="License"/> <img src="https://img.shields.io/github/languages/top/CyberLoop-dev/browser-pointer-capture-lab?style=for-the-badge" alt="Language"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/browser-pointer-capture-lab?style=for-the-badge" alt="Stars"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/browser-pointer-capture-lab?style=for-the-badge" alt="Last commit"/></p>
<p align="center"><img src="assets/mark.svg" alt="browser-pointer-capture-lab project mark" width="520"/></p>

## 🧭 Overview

`browser-pointer-capture-lab` demonstrates how an element can keep receiving pointer events after a drag moves outside its bounds. Toggle pointer capture, drag in the test area, and inspect the event lifecycle.

## ✨ Features

- 🖱️ Compare captured and uncaptured pointer drags
- 📍 Display pointer ID, pointer type, and local coordinates
- 🔔 Log pointerdown, pointermove, pointerup, pointercancel, and lostpointercapture
- 🧪 Clear and replay the event log
- 🔒 All interaction stays in the local browser

## 🧪 Demo

Run `npm start`, open `http://127.0.0.1:4174`, and drag across the test pad. Try leaving the pad while capture is enabled and disabled. No hosted demo is published.

## 🚀 Quick Start

```bash
npm start
```
Open `http://127.0.0.1:4174`. Requires Node.js 18+ and a modern browser. No npm dependencies are needed.

## 🧰 Tech Stack

- **Stack:** Node.js built-in HTTP server, Pointer Events API, HTML, CSS, and browser JavaScript
- **Approach:** small, local-first tooling with clear output

## 🗂️ Folder Structure

```text
browser-pointer-capture-lab/
├── assets/mark.svg
├── public/index.html
├── public/styles.css
├── public/app.js
├── server.js
├── package.json
├── .gitignore
├── LICENSE
└── README.md
```

## 🛣️ Roadmap

- Add multi-pointer tracking for touch devices
- Add a visual pointer-capture state timeline

## 🤝 Contributing

Issues and focused pull requests are welcome. Explain the use case, keep changes small, and add tests for behavior changes. Run the project using the Quick Start instructions before submitting.

## 📄 License

Released under the [MIT License](LICENSE).

<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f766e,100:0f172a&height=120&section=footer&animation=twinkling" alt="Animated wave footer"/></p>
