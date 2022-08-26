import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./assets/global.css";
import Header from "./components/header/components/header/Header";
import Footer from "./components/footer";
import About from "./pages/about/components/About";
import Services from "./pages/services/components/Services";
import Blog from "./pages/blog/components/Blog";
import Pricing from "./pages/pricing/components/Pricing";
import Contact from "./pages/contact/components/Contact";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
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
