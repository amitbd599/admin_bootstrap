import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import TablesDataInner from "../components/TablesDataInner";

const TablesDataPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Tables Data"} />

      {/* TablesDataInner */}
      <TablesDataInner />
    </MasterLayout>
  );
};

export default TablesDataPage;
