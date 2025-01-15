import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbsInner from "../components/BreadcrumbsInner";

const BreadcrumbsPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Breadcrumbs"} />

      {/* BadgesInner */}
      <BreadcrumbsInner />
    </MasterLayout>
  );
};

export default BreadcrumbsPage;
