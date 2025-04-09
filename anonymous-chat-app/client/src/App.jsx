import React, { useState, useEffect } from 'react';
import socket from './socket';

function App() {
  const [roomId, setRoomId] = useState('');
  const [joined, setJoined] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('receive-message', ({ sender, message }) => {
      setMessages((prev) => [...prev, { sender, message }]);
    });

    socket.on('user-joined', (id) => {
      setMessages((prev) => [...prev, { sender: 'System', message: `User ${id} joined.` }]);
    });

    socket.on('user-left', (id) => {
      setMessages((prev) => [...prev, { sender: 'System', message: `User ${id} left.` }]);
    });

    return () => {
      socket.off('receive-message');
      socket.off('user-joined');
      socket.off('user-left');
    };
  }, []);

  const handleJoin = () => {
    if (roomId.trim()) {
      socket.emit('join-room', roomId);
      setJoined(true);
    }
  };

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('send-message', { roomId, message });
      setMessages((prev) => [...prev, { sender: 'You', message }]);
      setMessage('');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/room.png')" }}
    >
      <div className="min-h-screen backdrop-blur-sm bg-black/60 flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-10 drop-shadow-lg">
          HushRoom
        </h1>

        {!joined ? (
          <div className="bg-white/90 p-6 rounded-xl shadow-lg text-center space-y-4 max-w-md w-full">
            <h2 className="text-xl font-semibold text-gray-800">Join a Room</h2>
            <input
              type="text"
              placeholder="Enter Room Code"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />
            <button
              onClick={handleJoin}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Join
            </button>
          </div>
        ) : (
          <div className="bg-white/90 p-6 rounded-xl shadow-lg max-w-2xl w-full">
            <div className="h-96 overflow-y-auto border border-gray-300 p-4 mb-4 rounded bg-gray-50 text-gray-800">
              {messages.map((m, i) => (
                <div key={i} className="mb-2">
                  <span className="font-semibold">{m.sender}:</span> {m.message}
                </div>
              ))}
            </div>
            <div className="flex">
              <input
                type="text"
                className="flex-grow px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
              />
              <button
                onClick={sendMessage}
                className="ml-2 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
