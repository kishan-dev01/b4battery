import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
// import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./ui/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import About from "./pages/About";
import ProductsSection from "./pages/Products";

function App() {
  useEffect(() => {
    emailjs.init("nKbomdejqxFGQm6aI");
  }, []);

  return (
    <ThemeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="products" element={<ProductsSection />} />

            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
