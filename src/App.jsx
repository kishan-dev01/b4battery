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
import EvLithiumBatteries from "./pages/products/EvLithiumBatteries";
import BatterySwappingBaaS from "./pages/products/BatterySwappingBaaS";
import EForkliftBatteries from "./pages/products/EForkliftBatteries";
import ECleaningMachineBatteries from "./pages/products/ECleaningMachineBatteries";
import EDroneBatteries from "./pages/products/EDroneBatteries";
import SolarPanels from "./pages/products/SolarPanels";
import SolarBatteries from "./pages/products/SolarBatteries";
import SolarInverters from "./pages/products/SolarInverters";
import HomeUPS from "./pages/products/HomeUPS";
import HiCapacityUPS from "./pages/products/HiCapacityUPS";

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

            {/* Product Pages */}
            <Route
              path="products/ev-lithium"
              element={<EvLithiumBatteries />}
            />
            <Route
              path="products/battery-swapping"
              element={<BatterySwappingBaaS />}
            />
            <Route
              path="products/e-forklift"
              element={<EForkliftBatteries />}
            />
            <Route
              path="products/e-cleaning"
              element={<ECleaningMachineBatteries />}
            />
            <Route path="products/e-drone" element={<EDroneBatteries />} />
            <Route path="products/solar-panels" element={<SolarPanels />} />
            <Route
              path="products/solar-batteries"
              element={<SolarBatteries />}
            />
            <Route
              path="products/solar-inverters"
              element={<SolarInverters />}
            />
            <Route path="products/home-ups" element={<HomeUPS />} />
            <Route
              path="products/hi-capacity-ups"
              element={<HiCapacityUPS />}
            />

            {/* fallback to undefined routes */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
