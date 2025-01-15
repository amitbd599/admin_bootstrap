import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import TabsInner from "../components/TabsInner";

const TabsPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Tabs"} />

      {/* TabsInner */}
      <TabsInner />
    </MasterLayout>
  );
};

export default TabsPage;
