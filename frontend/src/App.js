import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import CSLayout from './components/CSLayout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Schedule from './pages/Schedule';
import Staff from './pages/Staff';
import Chat from './pages/Chat';
import Games from './pages/Games';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Account from './pages/Account';
import NotFound from './pages/NotFound';

// CS Pages
import CSHome from './pages/cs/CSHome';
import CSCourses from './pages/cs/CSCourses';
import CSSchedule from './pages/cs/CSSchedule';
import CSStaff from './pages/cs/CSStaff';
import CSChat from './pages/cs/CSChat';
import CSGames from './pages/cs/CSGames';
import CSFAQ from './pages/cs/CSFAQ';
import CSContact from './pages/cs/CSContact';
import CSAccount from './pages/cs/CSAccount';

function App() {
  return (
    <Router>
      <Routes>
        {/* IT Portal Routes */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/courses" element={<MainLayout><Courses /></MainLayout>} />
        <Route path="/schedule" element={<MainLayout><Schedule /></MainLayout>} />
        <Route path="/staff" element={<MainLayout><Staff /></MainLayout>} />
        <Route path="/chat" element={<MainLayout><Chat /></MainLayout>} />
        <Route path="/games" element={<MainLayout><Games /></MainLayout>} />
        <Route path="/faq" element={<MainLayout><FAQ /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/account" element={<MainLayout><Account /></MainLayout>} />
        
        {/* CS Portal Routes */}
        <Route path="/cs" element={<CSLayout><CSHome /></CSLayout>} />
        <Route path="/cs/courses" element={<CSLayout><CSCourses /></CSLayout>} />
        <Route path="/cs/schedule" element={<CSLayout><CSSchedule /></CSLayout>} />
        <Route path="/cs/staff" element={<CSLayout><CSStaff /></CSLayout>} />
        <Route path="/cs/chat" element={<CSLayout><CSChat /></CSLayout>} />
        <Route path="/cs/games" element={<CSLayout><CSGames /></CSLayout>} />
        <Route path="/cs/faq" element={<CSLayout><CSFAQ /></CSLayout>} />
        <Route path="/cs/contact" element={<CSLayout><CSContact /></CSLayout>} />
        <Route path="/cs/account" element={<CSLayout><CSAccount /></CSLayout>} />
        
        {/* 404 Route */}
        <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
