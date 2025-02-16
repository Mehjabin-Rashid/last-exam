import React from "react";

import { BrowserRouter, Route, Routes} from "react-router-dom";
import AboutPage from "./Page/AboutPage.jsx";
import DeshboardPage from "./Page/DeshboardPage.jsx";
import Home from "./Page/HomePage.jsx";
import BlogPage from "./Page/BlogPage.jsx";
import ContactPage from "./Page/ContactPage.jsx";
import ServicePage from "./Page/ServicePage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/deshboard" element={<DeshboardPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );  
};

export default App;