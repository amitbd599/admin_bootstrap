import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import AccordionInner from "../components/AccordionInner";

const AccordionPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Accordion"} />

      {/* AccordionInner */}
      <AccordionInner />
    </MasterLayout>
  );
};

export default AccordionPage;
