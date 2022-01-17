import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserContext from './context/userContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({ uid: '' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <h1>WAHHOOOOOO</h1>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
