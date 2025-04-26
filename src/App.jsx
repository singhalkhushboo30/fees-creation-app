import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import FeesCreation from './pages/FeesCreation';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/fees-creation" element={<FeesCreation />} />
    </Routes>
  </Router>
);

export default App;
