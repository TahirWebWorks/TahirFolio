import React from "react";
import Header from './components/header'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Home from "./pages/home/home";

function App() {
  return (
    <div>
      <CustomCursor />
      <Header/>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
