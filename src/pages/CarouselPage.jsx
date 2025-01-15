import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import CarouselInner from "../components/CarouselInner";

const CarouselPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Carousel"} />

      {/* CarouselInner */}
      <CarouselInner />
    </MasterLayout>
  );
};

export default CarouselPage;
