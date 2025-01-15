import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import BadgesInner from "../components/BadgesInner";

const BadgesPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Accordion"} />

      {/* BadgesInner */}
      <BadgesInner />
    </MasterLayout>
  );
};

export default BadgesPage;
