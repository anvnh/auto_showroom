import React, { useEffect } from 'react'

import LinkHeader from '../common/LinkHeader'

import Navbar from '../common/Navbar'
import Voucher from './element/Voucher'
import Lenis from '@studio-freight/lenis'

const VoucherLayout = () => {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
		return () => {
			lenis.destroy();
		};
	}, []);
  return (
		<section className="bg-primary w-full h-full">
			<div className="w-full overflow-hidden">
				<div className="items-start justify-center">
					<div className="w-full bg-primary">
						<Navbar />
					</div>
				</div>
				<div className="items-start justify-center">
					<div className="w-full bg-primary pt-28">
						<LinkHeader isViewProduct={false} isCart={false} />
					</div>
				</div>
				<div className="flex px-12 ss:px-0 md:px-[120px] bg-primary">
					<div className="w-full justify-center">
						<Voucher />
					</div>
				</div>
			</div>
		</section>
  );
}

export default VoucherLayout
