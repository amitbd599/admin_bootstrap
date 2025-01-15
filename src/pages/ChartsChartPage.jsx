import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ChartsChartInner from "../components/ChartsChartInner";

const ChartsChartPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Charts Chart"} />

      {/* ChartsChartInner */}
      <ChartsChartInner />
    </MasterLayout>
  );
};

export default ChartsChartPage;
