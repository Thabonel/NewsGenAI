import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import VideoGenerator from './components/video-generation/VideoGenerator';
import { VideoProvider } from './context/VideoContext';

function App() {
  return (
    <Router>
      <VideoProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<VideoGenerator />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Layout>
      </VideoProvider>
    </Router>
  );
}

export default App;