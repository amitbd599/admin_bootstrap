import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import FormsInner from "../components/FormsInner";

const FormsPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Forms"} />

      {/* FormsInner */}
      <FormsInner />
    </MasterLayout>
  );
};

export default FormsPage;
