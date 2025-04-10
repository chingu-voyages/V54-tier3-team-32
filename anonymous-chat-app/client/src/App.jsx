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
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/room.png')" }}
    >
      <div className="min-h-screen px-4 py-8 bg-black/20 backdrop-blur-sm">
        {/* <h1 className="text-5xl font-bold text-center mb-8"> */}
        <h1 className="text-5xl font-bold text-center mb-8 flex items-center justify-center space-x-4">
          <img src="/logo-mushroom.png" alt="HushRoom Logo" className="w-12 h-12" />
          <span>HushRoom</span>
        </h1>

        {!joined ? (
          <div className="flex flex-col items-center space-y-6">
            <div className="bg-black/20 p-6 rounded-lg shadow-lg w-full max-w-md backdrop-blur-md">
              <h2 className="text-xl font-semibold mb-4">Join a Room</h2>
              <input
                type="text"
                placeholder="Enter Room ID"
                className="w-full px-3 py-2 rounded text-black mb-4"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
              />
              <button onClick={handleJoin} className="bg-blue-500 px-4 py-2 rounded w-full">
                Join
              </button>
            </div>

            <div className="bg-black/20 p-6 rounded-lg shadow-lg w-full max-w-3xl space-y-6 backdrop-blur-md">
              <div>
                <h3 className="text-2xl font-semibold mb-2">🔍 How to Use</h3>
                <p>
                  Open the website in a browser, and type a word (say, <span className="italic">xyz</span>) that will be used as the joining code and press Enter.
                  You’ll enter an anonymous room <span className="italic">(xyz)</span> as <strong>User 1</strong>.<br /><br />
                  Then open the same website in another browser/tab, enter the same code <span className="italic">xyz</span>, and you'll join as <strong>User 2</strong>.<br /><br />
                  Now both users can chat anonymously.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">✨ Features</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Join rooms using a simple code</li>
                  <li>Real-time anonymous messaging</li>
                  <li>System messages when users join or leave</li>
                  <li>Clean, minimal UI</li>
                </ul>
              </div>
              {/* <a
                href="https://github.com/prakshh/hushRoom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                View full README on GitHub
              </a> */}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full max-w-xl">
              <div className="h-96 overflow-y-auto border border-gray-700 p-4 mb-4 rounded bg-black/20 backdrop-blur-md">
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
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
