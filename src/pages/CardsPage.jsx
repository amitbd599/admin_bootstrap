import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import CardsInner from "../components/CardsInner";

const CardsPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Cards"} />

      {/* CardsInner */}
      <CardsInner />
    </MasterLayout>
  );
};

export default CardsPage;
