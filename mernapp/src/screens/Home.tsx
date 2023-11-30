import React from "react";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import Card from "../components/Card.tsx";
import Carousel from "../components/Carousel.tsx";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel/>
      </div>
      <div className="m-3">
        <Card/>
      </div>
      <div className="m-3">
        <Card/>
      </div>
      <div className="m-3">
        <Card/>
      </div>
      <div className="m-3">
        <Card/>
      </div>
      <div className="m-3">
        <Card/>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
