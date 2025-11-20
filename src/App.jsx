import React from "react";
import { motion } from "framer-motion";
import Header from './components/header'
import Footer from './components/Footer'
import SimpleSplashCursor from './components/SimpleSplashCursor'
import Home from "./pages/home/home";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SimpleSplashCursor />
      <Header />
      <Home />
      <Footer />
    </motion.div>
  );
}

export default App;
