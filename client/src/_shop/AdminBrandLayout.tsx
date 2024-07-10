import React from 'react'
import NavbarAdmin from './AdminBrand/NavbarAdmin'
import Dashboard from './AdminBrand/Dashboard'


const AdminBrandLayout = () => {
  return (
    <section className="w-full bg-primary">
    <div className="w-full ">
        <div className="items-start justify-center">
            <div className="w-full bg-primary pt-24">
                <NavbarAdmin />
            </div>
        </div>
        <div className="items-start justify-center">
            <div className="w-full h-full bg-primary pt-1 pb-12">
                <Dashboard />
            </div>
        </div>
    </div>
</section>
  )
}

export default AdminBrandLayout
