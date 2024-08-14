import { useQuery } from "@tanstack/react-query";
import { IoIosStar } from "react-icons/io";
import { MdOutlineVerifiedUser } from "react-icons/md";
import ceo1 from "@/assets/ceo/acc.jpg";
import ceo2 from "@/assets/ceo/ceo2.png";
import ceo3 from "@/assets/ceo/ceo3.png";
const Testimonials = () => {

    const { data: bestReviewed, isLoading, refetch, isRefetching } = useQuery({
		queryKey: ["review"],
		queryFn: async () => {
			try {
				const response = await fetch(`/api/car/reviewed/best`);
				const data = await response.json();

				// console.log(data);

				if (!response.ok) {
					throw new Error(data.message || "Something went wrong!");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});

	const { data: countReview } = useQuery({
		queryKey: ["count"],
		queryFn: async () => {
			try {
				const response = await fetch(`/api/car/reviewed/count`);
				const data = await response.json();

				// console.log(data);

				if (!response.ok) {
					throw new Error(data.message || "Something went wrong!");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		}
	});

    return (
		<div className="grid sm:grid-cols-2 grid-cols-1">
			<div className="text-black">
				<div className="md:px-60 px-12 pt-20">
					<div data-aos="fade-up" className="text-3xl md:text-4xl font-bold font-poppins">
						What Our <br /> Customers Say
					</div>

					{!isLoading && bestReviewed && (
						<div data-aos="fade-up" className="py-6">
							<h1 className="md:text-xl line-clamp-3 overflow-hidden">
								{bestReviewed?.text}
							</h1>
							<div className="flex text-green-400">
								{Array.from({
									length: bestReviewed.rating,
								}).map((_, index) => (
									<IoIosStar key={index} className="" />
								))}
							</div>
							<div className="pt-4 md:text-xl">
								{countReview && (
									<p>Based on {countReview.count} reviews</p>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
			<div data-aos="fade-up" className="pt-12 md:pt-20 px-12">
				<div className="flex text-green-400 text-3xl items-center">
					<IoIosStar className="" />
					<IoIosStar className="" />
					<IoIosStar className="" />
					<IoIosStar className="" />
					<IoIosStar className="" />
					<MdOutlineVerifiedUser className="text-xl" />
				</div>
				<div className="pt-5 md:text-xl text-black">
					<p>
						<span className="font-bold md:text-2xl">Gernot Döllner</span>{" "}
						<br />
						<span>CEO at Audi</span>
					</p>
					<p className="pt-5 pr-28 font-poppins">
						"I'm truly impressed by the AAP website. 
						Its intuitive interface and advanced technology features create a truly unique and convenient car shopping experience. 
						This perfectly aligns with Audi's relentless pursuit of innovation."
					</p>
				</div>

				<div data-aos="fade-up" className="pt-5">
					<div className="avatar placeholder space-x-4">
						<div className="bg-black w-12 rounded-3xl text-black">
							<img src={ceo1} alt="ceo" className="rounded-3xl" />
						</div>
						<div className="bg-black w-12 rounded-3xl text-black">
							<img src={ceo2} alt="ceo" className="rounded-3xl" />
						</div>
						<div className="bg-black w-12 rounded-3xl text-black">
							<img src={ceo3} alt="ceo" className="rounded-3xl" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonials
