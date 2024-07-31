import React from 'react'
import Navbar from './common/Navbar';
import UserCart from './cart/UserCart';
import Footer from '@/components/common/Footer';
import LinkHeader from './common/LinkHeader';

const CartLayout = ({ isLogin }) => {
    return (
        <section className="w-full bg-primary">
            <div className="w-full overflow-hidden">
                <div className="items-start justify-center">
                    <div className="w-full bg-primary">
                        <Navbar />
                    </div>
                </div>
                <div className="items-start justify-center pt-28">
					<div className="w-full bg-primary">
						<LinkHeader isViewProduct={false} isCart={true}/>
					</div>
				</div>
                <div className='items-start md:px-64 bg-primary'>
                    <div className="items-start justify-center">
                        <div className="w-full bg-primary">
                            <UserCart />
                        </div>
                    </div>
                </div>
                <div className="items-start justify-center bg-primary">
                    <div className="w-full bg-primary">
                        <Footer />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CartLayout
