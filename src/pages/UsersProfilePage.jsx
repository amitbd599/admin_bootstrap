import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ProfileInner from "../components/ProfileInner";

const UsersProfilePage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"Profile"} />

      {/* ProfileInner */}
      <ProfileInner />
    </MasterLayout>
  );
};

export default UsersProfilePage;
