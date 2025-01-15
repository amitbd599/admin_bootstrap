import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import FAQInner from "../components/FAQInner";

const FAQPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Frequently Asked Questions"} />

      {/* FAQInner */}
      <FAQInner />
    </MasterLayout>
  );
};

export default FAQPage;
