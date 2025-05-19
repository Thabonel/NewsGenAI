import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import VideoGenerator from './components/video-generation/VideoGenerator';
import { VideoProvider } from './context/VideoContext';

function App() {
  return (
    <Router>
      <VideoProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/create" element={<VideoGenerator />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Layout>
      </VideoProvider>
    </Router>
  );
}

export default App;