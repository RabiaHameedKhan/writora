import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import BlogDetail from './pages/BlogDetail';
import Scroll from './components/Scroll'; 

function App() {
  return (
    <Router>
      <Navbar />
      <div >
      <Scroll/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
         <Route path="/blogdetail/:id" element={<BlogDetail />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
