import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ComponentsAlertsInner from "../components/ComponentsAlertsInner";

const ComponentsAlertsPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Alerts"} />

      {/* ComponentsAlertsInner */}
      <ComponentsAlertsInner />
    </MasterLayout>
  );
};

export default ComponentsAlertsPage;
