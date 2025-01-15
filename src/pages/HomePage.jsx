import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import HomeInner from "../components/HomeInner";

const HomePage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Home"} />

      {/* HomeInner */}
      <HomeInner />
    </MasterLayout>
  );
};

export default HomePage;
