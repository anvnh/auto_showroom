import { Canvas } from "@react-three/fiber";
import { MarqueText } from "@/_root/_homepage";
import {
	aap_jepg,
	icon1,
	icon2,
	icon3,
	icon4,
	icon5,
	icon6,
	an,
	anh,
	phat,
} from "@/assets/aboutUs";
import Navbar from "@/_shop/common/Navbar";
import Footer from "@/components/common/Footer";
import { logo, gif } from "@/assets";
const AboutUs = () => {
	return (
		<div className="bg-gray-900 w-full h-full flex justify-center items-center">
			<div className="bg-gray-800 rounded-xl border shadow-white shadow-md border-white  w-[400px] h-auto p-6 backdrop-blur-xl rounded-tr-[150px]">
				<h1 className="font-bold text-2xl pb-5">Dear Tuan Anh</h1>
				<p>
					We're excited to have you join us. To complete your
					registration, please click on the link below to verify your
					email address:
				</p>
			<div className="w-full h-auto p-2 mt-4 mb-4 border border-white rounded-md">
      <h4 className="cursor-pointer"> link </h4>
      </div>
				<p>
					Once verified, you'll have access to all of our amazing
					features.
				</p>
				<p >
					<span className="font-bold">Thanks</span> for joining our
					showroom, as well as our community.{" "}
				</p>
				<div className="w-full flex justify-center">
					<img
						src={logo}
						alt=""
						className="w-32 flex animate-pulse justify-center"
					/>
				</div>
			</div>
		</div>
	);
};
export default AboutUs;
