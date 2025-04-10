# 💬 HushRoom

## [LIVE Demo](https://hush-room.vercel.app/)

![homepage](anonymous-chat-app\client\public\homepage.png)

## Project Overview

**HushRoom** is a real-time anonymous chat app that connects strangers for private one-on-one conversations. No login, no identity — just pure conversation.

--- 

## 💡 How to Use HushRoom

- Open the HushRoom website in a browser.
- Enter any word (for example, xyz) as a joining code and press Enter.
- You will be entered into an anonymous room named xyz as User 1.
- Now open the same website in another browser or device.
- Enter the same joining code (xyz) and press Enter.
- You will now be connected to the same anonymous room as User 2.

🎉 Both users can now chat anonymously in real-time — no usernames, no logins, just pure conversation.

---

## 🚀 Features

- ✅ Anonymous chat between two users
- 🔄 Real-time communication using WebSockets (Socket.IO)
- 🧠 Auto match when someone new joins
- ❌ Disconnect anytime
- ⚡ Fast & lightweight frontend built with React + TailwindCSS

---

## 🛠️ Tech Stack

### Frontend:
- React
- Tailwind CSS
- Socket.IO Client
- Hosted on **Vercel**

### Backend:
- Node.js
- Express.js
- Socket.IO Server
- Hosted on **Render**

---

## ⚙️ Local Development

### 🔧 Prerequisites:
- Node.js and npm installed

### 📁 Folder Structure:

HushRoom/ ├── client/ → React frontend └── server/ → Express backend


---

### 🔄 Backend Setup (Server)

```bash
cd server
npm install
npm start

Server runs on http://localhost:5000 by default.

---

### 🎨 Frontend Setup (Client)

cd client
npm install
npm start

Client runs on http://localhost:3000 by default.

🔧 Make sure to update the frontend's socket URL to point to your local or deployed backend.

---

## 🌍 Deployment

Backend (Render)

- Deploy your server/ folder to Render

- Set your Build Command to: npm install

- Set your Start Command to: npm start

Frontend (Vercel)

- Deploy your client/ folder to Vercel

- Ensure the deployed client uses the correct backend URL for Socket.IO connection.

- Example: 
    const socket = io("https://your-backend-url.onrender.com");

---

## 📌 To-Do / Ideas

- Typing indicators

- Room-based chats

- Mobile responsiveness

- User reports & moderation

- Timed chats or conversation scoring

---

## Show your support

📌 Please feel free to contribute to this project with your commits

Give a ⭐ if you like this website! You can fork it and contribute

--

## Can I contribute?

Sure, open an issue, point out errors, and what not? Wanna fix something yourselves? You're welcome to open a PR.
