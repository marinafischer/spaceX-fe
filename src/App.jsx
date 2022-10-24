import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Next from './pages/Next';
import Latest from './pages/Latest';
import UpComing from './pages/UpComing';
import Past from './pages/Past';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/next" element={<Next />} />
        <Route exact path="/latest" element={<Latest />} />
        <Route exact path="/upcoming" element={<UpComing />} />
        <Route exact path="/past" element={<Past />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
