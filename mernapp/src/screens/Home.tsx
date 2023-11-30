import React from "react";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import Card from "../components/Card.tsx";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Card/>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
