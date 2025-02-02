import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Navbar } from './components/Navbar';
import HomePage from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

export default App