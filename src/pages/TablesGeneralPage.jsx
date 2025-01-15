import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import TablesGeneralInner from "../components/TablesGeneralInner";

const TablesGeneralPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Tables General"} />

      {/* TablesGeneralInner */}
      <TablesGeneralInner />
    </MasterLayout>
  );
};

export default TablesGeneralPage;
