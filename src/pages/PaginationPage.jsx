import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import PaginationInner from "../components/PaginationInner";

const PaginationPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Pagination"} />

      {/* PaginationInner */}
      <PaginationInner />
    </MasterLayout>
  );
};

export default PaginationPage;
