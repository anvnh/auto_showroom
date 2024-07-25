import React from "react";
import NavbarAdmin from "./AdminBrand/NavbarAdmin";
import Dashboard from "./AdminBrand/Dashboard";

const AdminBrandLayout = () => {
	return (
		<section className="w-full bg-primary">
			<div className="w-full ">
				<div className="items-start justify-center flex">
					<div className="w-full bg-primary xl:pt-36 pt-24">
						<NavbarAdmin />
					</div>
				</div>
				<div className="items-start justify-center">
					<div className="w-full xs:h-[2800px] ss:h-[3400px] sm:h-[4000px] h-[2500px] lg:h-[4200px] xl:h-full  bg-primary pt-0 pb-12">
						<Dashboard />
					</div>
				</div>
			</div>
		</section>
	);
};

export default AdminBrandLayout;
