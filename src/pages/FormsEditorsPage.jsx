import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import FormsEditorsInner from "../components/FormsEditorsInner";

const FormsEditorsPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Forms Editors"} />

      {/* FormsEditorsInner */}
      <FormsEditorsInner />
    </MasterLayout>
  );
};

export default FormsEditorsPage;
