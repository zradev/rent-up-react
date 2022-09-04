import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./assets/global.css";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./pages/about";
import Services from "./pages/services";
import Blog from "./pages/blog";
import Pricing from "./pages/pricing";
import Contact from "./pages/contact";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
