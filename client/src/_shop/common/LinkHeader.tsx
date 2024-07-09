import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const LinkHeader = () => {
    const LinkProduct = useParams();
    return (
		<>
			{/* Link */}
			<div className="w-full h-[50px] bg-[#020819] bg-opacity-15 text-white font-poppins pt-3">
				<ul className="w-full justify-center flex items-center">
					<Link to="/shop">
						<li className="hover:text-blue-500">Home</li>
					</Link>
					<span> &nbsp; / </span>
					<Link to="/shop/product">
						<li className="hover:text-blue-500">&nbsp; Product</li>
					</Link>
					<span> &nbsp; / </span>
					<li className="hover:text-blue-500">
						&nbsp; {LinkProduct.id}
					</li>
				</ul>
			</div>
		</>
	);
}

export default LinkHeader
