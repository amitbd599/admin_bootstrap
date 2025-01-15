import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import FormsLayoutsInner from "../components/FormsLayoutsInner";

const FormsLayoutsPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Forms Layouts"} />

      {/* FormsLayoutsInner */}
      <FormsLayoutsInner />
    </MasterLayout>
  );
};

export default FormsLayoutsPage;
