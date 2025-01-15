import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import RemixIconsInner from "../components/RemixIconsInner";

const IconsRemixPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Remix Icons"} />

      {/* RemixIconsInner */}
      <RemixIconsInner />
    </MasterLayout>
  );
};

export default IconsRemixPage;
