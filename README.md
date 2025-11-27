# Quiz App – Interactive React Quiz with Animations

A beautifully designed, fully responsive **Quiz Application** built using **React** and **Tailwind CSS**, featuring smooth transitions, custom UI components, score calculation, keyboard navigation, and a delightful animated paw mascot on the first screen.  
This UI was developed as part of **The Wedding Company Frontend Intern Assignment**.

---

## Live Demo

👉 **https://frontend-intern-assignment-gamma.vercel.app/**

---

## Table of Contents

- [Overview](#overview)
- [Set-Up Instructions](#set-up-instructions)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Assumptions Made](#assumptions-made)
- [Time Spent on the Assignment](#time-spent-on-the-assignment)
---

## Overview

This React-based quiz application presents multiple-choice questions one at a time, tracks progress visually, computes the user's score, and displays a result screen with a smooth counting animation.  
The UI closely matches the design reference shared in the assignment, including soft gradients, rounded cards, smooth shadows, and interactive button states.

A unique touch is added with a **cute paw animation** shown only on the first question screen to encourage the user.

---

## Set-Up Instructions
1. Clone the repository

-> git clone https://github.com/harshalidharmik/Frontend_Intern_Assignment_The_Wedding_Company.git

2. Navigate to the Project Directory

-> cd Frontend_Intern_Assignment_The_Wedding_Company

3. Install Dependencies

-> npm install

4. Start the Development Server

-> npm start

---

## Features

### **Clean, Modern UI**
- Elegant gradients and soft shadows.  
- Smooth rounded card design.
- High-quality fonts imported from Google Fonts.  

### **Progress Indicators**
- Horizontal progress pills.
- Current question highlighted.  
- Smooth transitions.

### **Interactive Question Flow**
- Previous/Next navigation.  
- Arrow-key support (Left/Right).  
- Selected options appear visually distinct.  
- Animated hover effects.

### **Final Score Screen**
- Full-screen minimal layout.
- Animated counting from **0 → final percentage**.
- Clean typography (Playfair Display).
- “Start Again” button.

### **Paw Mascot Animation**
- Appears **only on the first screen**.
- Bouncing paw + speech bubble.
- Custom SVG illustration.
- Layered shadow + subtle motions.  

### **Fully Responsive**
- Looks great on desktop, tablet, and mobile.
- Scales typography & layout gracefully.

---

## Tech Stack

- **React.js** – Component-based UI  
- **JavaScript (ES6+)**  
- **Tailwind CSS** – Utility-first styling  
- **CSS Keyframe Animations** – Paw motion, hover effects  
- **Framer Motion** – Smooth page transitions

---

## Assumptions Made

- Quiz questions are static (local JSON array).
- Submissions are allowed even if all questions aren’t answered.
- No backend/API is required for this assignment.
- Paw animation intentionally visible only on the first screen.

## Time Spent on the Assignment

| Task                                         | Time Spent    |
| -------------------------------------------- | ------------- |
| Project setup & environment                  | 20 minutes    |
| UI/UX design & Tailwind styling              | 3–4 hours     |
| Quiz functionality (state, navigation)       | 1 hour        |
| Animations (paw, transitions, score counter) | 1.5–2 hours   |
| Bug fixes, polish & responsiveness           | 1–1.5 hours   |
| Deployment + README documentation            | 20–30 minutes |

- Total Estimated Time: 7 - 8 Hours