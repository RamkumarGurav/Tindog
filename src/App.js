/* eslint-disable */
import React from "react";
import Download from "./components/Download";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeaderX from "./components/HeaderX";
import Header from "./components/Header";
import Pract from "./components/Pract";
import Press from "./components/Press";
import Price from "./components/Price";
import Testimonials from "./components/Testimonials";
import NavbarT from "./components/NavbarT";
import NavbarComplexT from "./components/NavbarComplexT";

const App = () => {
  return (
    <div>
    {/* <NavbarComplexT/> */}
    {/* <NavbarT/>  */}
      {/* <HeaderX /> */}
      <Header/>
      <Features/>
<Testimonials/>
<Press/>
<Price/>
<Download/>
<Footer/>
    </div>
  );
};

export default App;
