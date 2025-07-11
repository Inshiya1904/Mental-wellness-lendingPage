import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
import WorkingStep from "./components/WorkingStep";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-primary overflow-x-hidden">
      <Toaster position="top-center" reverseOrder={false} />

      <Navbar />
      <Hero />
      <Services />
      <About />
      <WorkingStep />
      <Pricing />
      <Testimonial />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
