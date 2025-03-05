import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Saloon from './components/Saloon';
import BeautyTherapyPage from './pages/BeautyTherapyPage';
import BlogPage from './pages/BlogPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<><Hero /><About /><Saloon /></>} />
          <Route path="/beauty-therapy" element={<BeautyTherapyPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;