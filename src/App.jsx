import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./ui/Layout";
import Home from "./pages/Home";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import About from "./pages/About";
import ProductsSection from "./pages/Products";
import FranchiseModel from "./pages/FranchiseModel";
import VLEHub from "./pages/VLEHub";
import Payment from "./pages/Payment";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import TestimonialsPage from "./pages/TestimonialsPage";
import BlogsPage from "./pages/BlogsPage";
import ScrollToTop from "./components/common/ScrollToTop";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import NewsAndMedia from "./pages/NewsAndMedia";
import Technology from "./pages/Technology";
import NotFound from "./components/common/NotFound";
import Solutions from "./pages/Solutions";
import Sustainability from "./pages/Sustainability";

function App() {
  useEffect(() => {
    emailjs.init("nKbomdejqxFGQm6aI");
  }, []);

  return (
    <ThemeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="products" element={<ProductsSection />} />
            <Route path="technology" element={<Technology />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="sustainability" element={<Sustainability />} />
            <Route path="product-details" element={<ProductDetailsPage />} />
            <Route path="franchise-model" element={<FranchiseModel />} />
            <Route path="news" element={<NewsAndMedia />} />
            <Route path="vle-hub" element={<VLEHub />} />
            <Route path="emi-payment" element={<Payment />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="testimonials" element={<TestimonialsPage />} />
            <Route path="blogs" element={<BlogsPage />} />

            {/* fallback to undefined routes */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
