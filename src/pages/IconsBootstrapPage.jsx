import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import BootstrapIconsInner from "../components/BootstrapIconsInner";

const IconsBootstrapPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Bootstrap Icons"} />

      {/* BootstrapIconsInner */}
      <BootstrapIconsInner />
    </MasterLayout>
  );
};

export default IconsBootstrapPage;
