import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ProgressInner from "../components/ProgressInner";

const ProgressPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Progress"} />

      {/* ProgressInner */}
      <ProgressInner />
    </MasterLayout>
  );
};

export default ProgressPage;
