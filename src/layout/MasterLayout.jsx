import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MasterLayout = ({ children }) => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <Sidebar />

      <main id='main' className='main'>
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default MasterLayout;
