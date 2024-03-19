import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsAndConditions from './Components/TermsAndConditions';
import FAQs from './Components/FAQs';
import ForgotPassword from './Components/ForgotPassword';
import Courses from './Components/Courses';
import ItemCard from './Components/ItemCard';
import Cart from './Components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Privacy" element={<PrivacyPolicy />} />
        <Route path="/Terms" element={<TermsAndConditions />} />
        <Route path="/FAQ" element={<FAQs />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Item" element={<ItemCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
