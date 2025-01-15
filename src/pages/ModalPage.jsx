import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ModalInner from "../components/ModalInner";

const ModalPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Modal"} />

      {/* ModalInner */}
      <ModalInner />
    </MasterLayout>
  );
};

export default ModalPage;
