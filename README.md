# 📊 Angular Dashboard Architecture Practice

This is a sandbox project built to practice modern Angular component architecture, layout structuring, and content projection. The goal was to build a reusable, modular dashboard interface from scratch.

## 💡 Key Concepts Practiced

* **Component Isolation:** Breaking down a complex UI into small, independent, and reusable building blocks (e.g., Header, Profile Card, Statistics Card).
* **Modern Inputs:** Using Angular's new signal-based `input.required<string>()` to pass data safely from parent to child components.
* **Advanced Content Projection:** Utilizing `<ng-content select="...">` to create a smart, reusable form wrapper that strictly accepts specific HTML elements (like `input` and `textarea`).
* **CSS Grid Layout:** Structuring the dashboard using modern CSS Grid to create a responsive and clean card layout without relying on external UI libraries.

## 🛠️ Tech Stack
* Angular (Standalone Components, Signals)
* HTML / CSS

---
*Note: This repository serves as a personal learning journal to build muscle memory for enterprise-level Angular architecture.*
