import React from "react";
import NavbarAdmin from "./AdminBrand/NavbarAdmin";

const AdminBrandLayout = () => {
  return (
    <section className="w-full bg-gray-900 text-white overflow-hidden">
      <div className="w-full h-screen overflow-auto">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
          <div className="absolute inset-0 backdrop-blur-md"></div>
        </div>
        <NavbarAdmin />
      </div>
    </section>
  );
};

export default AdminBrandLayout;
