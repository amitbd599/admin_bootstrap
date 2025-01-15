import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ButtonsInner from "../components/ButtonsInner";

const ButtonsPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Buttons"} />

      {/* ButtonsInner */}
      <ButtonsInner />
    </MasterLayout>
  );
};

export default ButtonsPage;
