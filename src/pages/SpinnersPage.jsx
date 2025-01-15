import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import SpinnersInner from "../components/SpinnersInner";

const SpinnersPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Spinners"} />

      {/* SpinnersInner */}
      <SpinnersInner />
    </MasterLayout>
  );
};

export default SpinnersPage;
