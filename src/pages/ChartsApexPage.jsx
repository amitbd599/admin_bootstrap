import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ChartsApexInner from "../components/ChartsApexInner";

const ChartsApexPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Charts Apex"} />

      {/* ChartsApexInner */}
      <ChartsApexInner />
    </MasterLayout>
  );
};

export default ChartsApexPage;
