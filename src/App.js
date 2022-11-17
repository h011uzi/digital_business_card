import React from "react";
import "./style.css";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";
import Info from "./components/Info";


export default function App() {
  return (
    <>
      <main className="main">
        <section className="main__section">
          <Info/>
          <About />
          <Interest />
          <Footer />
          
        </section>
      </main>
    </>
  );
}