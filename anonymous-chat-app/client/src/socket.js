import { io } from "socket.io-client";

// const socket = io("http://localhost:5000"); // change to your deployed backend later
const socket = io("https://hushroom.onrender.com"); 

export default socket;
