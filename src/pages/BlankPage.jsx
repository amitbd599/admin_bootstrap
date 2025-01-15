import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import BlankInner from "../components/BlankInner";

const BlankPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Blank Page"} />

      {/* BlankInner */}
      <BlankInner />
    </MasterLayout>
  );
};

export default BlankPage;
