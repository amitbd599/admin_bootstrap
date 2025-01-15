import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import BoxiconsInner from "../components/BoxiconsInner";

const IconsBoxiconsPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Boxicons"} />

      {/* BoxiconsInner */}
      <BoxiconsInner />
    </MasterLayout>
  );
};

export default IconsBoxiconsPage;
