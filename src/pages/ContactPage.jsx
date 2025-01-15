import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ContactInner from "../components/ContactInner";

const ContactPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Charts Chart"} />

      {/* ContactInner */}
      <ContactInner />
    </MasterLayout>
  );
};

export default ContactPage;
