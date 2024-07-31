import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const LinkHeader = ({ isViewProduct, isCart }) => {
    const LinkProduct = useParams();

	// get single car
	const { data: car, isLoading, refetch, isRefetching } = useQuery({
		queryKey: ["car", LinkProduct.id],
		queryFn: async () => {
			try {
				const response = await fetch(`/api/car/${LinkProduct.id}`);
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
		enabled: isViewProduct,
	});

    return (
		<>
			{/* Link */}
			<div className="w-full h-[50px] bg-[#020819] bg-opacity-15 text-white font-poppins pt-4">
				<ul className="w-full justify-center flex items-center">
					<Link to="/shop">
						<li className="hover:text-blue-500">Home</li>
					</Link>
					<span> &nbsp; /</span>
					{isCart ? (
						<>
							<Link to="/shop/product">
								<li className="hover:text-blue-500">
									&nbsp; Product
								</li>
							</Link>
							<span> &nbsp; /</span>
							<div>
								<Link to="/shop/cart">
									<li className="hover:text-blue-500 cursor-pointer">
										&nbsp;&nbsp;Cart
									</li>
								</Link>
							</div>
						</>
					) : (
						<>
							<Link to="/shop/product">
								<li className="hover:text-blue-500">
									&nbsp; Product
								</li>
							</Link>
							{isViewProduct ? (
								<>
									<span> &nbsp; /&nbsp; </span>
									<div>
										<li className="hover:text-blue-500">
											&nbsp;{car?.brand}&nbsp;
											{car?.car_model}
										</li>
									</div>
								</>
							) : null}
						</>
					)}
				</ul>
			</div>
		</>
	);
}

export default LinkHeader
