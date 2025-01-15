import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import FormValidationInner from "../components/FormValidationInner";

const FormsValidationPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Form Validation"} />

      {/* FormValidationInner */}
      <FormValidationInner />
    </MasterLayout>
  );
};

export default FormsValidationPage;
