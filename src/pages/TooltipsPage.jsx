import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import TooltipsInner from "../components/TooltipsInner";

const TooltipsPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Tooltips"} />

      {/* TooltipsInner */}
      <TooltipsInner />
    </MasterLayout>
  );
};

export default TooltipsPage;
