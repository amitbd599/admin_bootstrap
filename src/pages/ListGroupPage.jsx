import React from "react";
import MasterLayout from "../layout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ListGroupInner from "../components/ListGroupInner";

const ListGroupPage = () => {
  return (
    <MasterLayout>
      {/* Breadcrumb */}
      <Breadcrumb title={"List Group"} />

      {/* ListGroupInner */}
      <ListGroupInner />
    </MasterLayout>
  );
};

export default ListGroupPage;
