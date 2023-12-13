import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/message")
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error("Error: ", error));
  });

  return (
    <div>
      <p>Mensaje del servidor: {message}</p>
    </div>
  )
}

export default App
