# AI Resume Analyzer 🚀

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)

</div>

An AI-powered web application that helps users analyze and improve their resumes. The system evaluates resume content, provides insights, scoring, and suggestions based on job descriptions and industry expectations.

---

## 📖 About the Project

AI Resume Analyzer is a full-stack **MERN application** designed to help job seekers improve their resumes using artificial intelligence.

Users can upload resumes and receive structured feedback including:

* Resume scoring
* Strengths and weaknesses
* Suggestions for improvement
* Resume customization for job descriptions

The goal of the platform is to help users create **ATS-friendly and recruiter-ready resumes**.

---

## ✨ Key Features

* 🔐 **User Authentication** – Secure login and registration using JWT
* 📄 **AI Resume Analysis** – Upload resumes and receive structured feedback
* 🤖 **AI Suggestions** – Get recommendations to improve resume quality
* 🎯 **Resume Customization** – Tailor resumes based on job descriptions
* 📊 **User Dashboard** – Track previous resume analyses
* 📱 **Responsive UI** – Clean interface built with Tailwind CSS

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### AI Integration

* OpenRouter API
* Llama-3 Model

### Authentication

* JWT
* bcrypt.js

---

## 🚀 Getting Started

Follow these steps to run the project locally.

---

### Prerequisites

Make sure you have installed:

* Git
* Node.js (v18 or later recommended)
* MongoDB Atlas account

---

## 📥 Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/ai-resume-analyzer.git
cd ai-resume-analyzer
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a **.env** file inside the `server` folder and add:

```
PORT=8080
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_openrouter_api_key
```

Start backend server:

```
npm start
```

---

### 3️⃣ Setup Frontend

Open a new terminal:

```bash
cd client
npm install
```

Create `.env` file inside `client` folder:

```
VITE_API_URL=http://localhost:8080
```

Run frontend:

```
npm run dev
```

---

## 📊 Future Improvements

* ATS compatibility score
* Resume keyword gap detection
* Resume template generator
* AI job recommendation system
* Resume rewriting with AI

---

## 👨‍💻 Developer


Shivam Baliyan
B.Tech CSE Student

MERN Stack Developer

---

## 📄 License

This project is created for **educational and portfolio purposes**.
