import Footer from '@/components/common/Footer'
import React from 'react'
import Navbar from '../common/Navbar'
import Order from './Order'

const OrderLayout = () => {
    return (
        <section className="w-full bg-primary">
            <div className="w-full overflow-hidden">
                <div className="items-start justify-center">
                    <div className="w-full bg-primary">
                        <Navbar />
                    </div>
                </div>
                <div className="items-start mt-36 justify-center">
                    <div className="w-full bg-primary">
                        <Order />
                    </div>
                   <div className='block md:hidden'>
                   <hr />
                   </div>
                </div>
                <div className="items-start md:pt-32 bg-primary justify-center">
                    <div className="w-full bg-primary">
                        <Footer />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderLayout
