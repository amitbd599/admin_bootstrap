import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ComponentsAlertsInner from "../components/AlertsInner";

const AlertsPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Alerts"} />

      {/* ComponentsAlertsInner */}
      <ComponentsAlertsInner />
    </MasterLayout>
  );
};

export default AlertsPage;
