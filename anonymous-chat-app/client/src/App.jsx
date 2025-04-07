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
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      {!joined ? (
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Join a Room</h1>
          <input
            type="text"
            placeholder="Enter Room ID"
            className="text-black px-3 py-2 rounded"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <button onClick={handleJoin} className="ml-2 bg-blue-500 px-4 py-2 rounded">
            Join
          </button>
        </div>
      ) : (
        <div className="w-full max-w-xl">
          <div className="h-96 overflow-y-auto border border-gray-700 p-4 mb-4 rounded bg-gray-800">
            {messages.map((m, i) => (
              <div key={i} className="mb-2">
                <span className="font-bold">{m.sender}:</span> {m.message}
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              className="flex-grow px-3 py-2 rounded text-black"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage} className="ml-2 bg-green-500 px-4 py-2 rounded">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
