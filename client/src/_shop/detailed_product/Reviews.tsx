import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import StarRating from "./StarRating";

const Reviews = () => {

	const queryClient = useQueryClient();

	const ID = useParams();
	const carId = ID.id;

	const [text, setText] = useState("");

    const [rating, setRating] = useState(null);
    const [rateColor, setRateColor] = useState(null);


	const { data: reviewed, isLoading, refetch, isRefetching } = useQuery({
		queryKey: ["review", carId],
		queryFn: async () => {
			try {
				const response = await fetch(`/api/car/reviewed/${carId}`);
				const data = await response.json();

				console.log(data);

				if (!response.ok) {
					throw new Error(data.message || "Something went wrong!");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});

	const { mutate: reviewing, isPending: isReviewing } = useMutation({
		mutationFn: async () => {
			try {
				const res = await fetch(`/api/car/comment/${carId}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({text: text, rating: rating}),
				});

				console.log(res);

				const data = await res.json();

				if(!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}

				return data;

			} catch {
				throw new Error(error);
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ["review"]});
			toast.success("Review added successfully");
			setText("");
			setRating(null);
		},
		onError: (error) => {
			toast.error(error.message);
		}
	})

	const handleSubmit = (e) => {
		e.preventDefault();
		// TODO
		// console.log(text, rating);
		reviewing({text, rating});
	};

	const [currentPage, setCurrentPage] = useState(1);
    const reviewPerPage=4;

	// calculate
    const indexOfLastProduct = currentPage * reviewPerPage;
	const indexOfFirstProduct = indexOfLastProduct - reviewPerPage;
	const currentReviewed = reviewed
		? reviewed.slice(indexOfFirstProduct, indexOfLastProduct)
		: [];
	const totalPages = reviewed
		? Math.ceil(reviewed.length / reviewPerPage)
		: 0;

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<section className="w-full h-full justify-center items-center px-56 text-white pt-14">
			<div>
				<h1 className="text-4xl text-center font-syncopate font-bold">
					Reviews
				</h1>
				<hr className="border-white border-opacity-30 relative top-3 py-3" />
			</div>
			<div>
				{isLoading && <LoadingSpinner />}
				<div className="flex overflow-hidden mb-3 ml-2">
						{[...Array(5)].map((star, index) => {
							const ratingValue = index + 1;
							return (
								<label className="cursor-pointer flex flex-col items-center space-x-1 justify-center">
									<input
										type="radio"
										name="rate"
										value={ratingValue}
										onClick={() => setRating(ratingValue)}
										className="hidden"
									/>
									<FaStar
										size={29}
										color={
											ratingValue <= (rateColor || rating)
												? "#ffc107"
												: "#e4e5e9"
										}
									/>
								</label>
							);
						})}
				</div>
				<form className="" onSubmit={handleSubmit}>
					<textarea
						className="textarea w-full p-3 bg-white md:-mb-8 text-black text-base resize-none border-none focus:outline-none border rounded-3xl"
						placeholder="Write your review here..."
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					<div className="w-full justify-end items-end flex mt-12">
						<button className="btn btn-primary bg-[#2191d8] rounded-full btn-sm text-white mb-10">
							{isReviewing ? <LoadingSpinner /> : "Review"}
						</button>
					</div>
				</form>
				<hr className="border-white border-opacity-30" />
				{!isLoading &&
					currentReviewed &&
					(currentReviewed.length === 0 ? (
						<div className="flex w-full justify-center items-center">
							<p>
								No reviews yet. Be the first to review this car!
							</p>
						</div>
					) : (
						<div>
							{currentReviewed.map((review) => (
								// TODO: User avatar
								<div
									key={review._id}
									className="hover:bg-white hover:bg-opacity-10 flex flex-col items-start space-y-1 border-b border-white border-opacity-30 p-3"
								>
									<StarRating rating={review.rating} />{" "}
									<p>{review.text}</p>{" "}
								</div>
							))}
						</div>
					))}
				{/* Pagination */}
				<div className="flex justify-center mt-8">
					{Array.from({ length: totalPages }, (_, i) => (
						<button
							key={i}
							onClick={() => paginate(i + 1)}
							className={`mx-1 px-3 py-1 rounded transision-all duration-300 ${
								currentPage === i + 1
									? "bg-gray-600 text-white scale-110"
									: "bg-gray-200 hover:bg-gray-300"
							}`}
						>
							{i + 1}
						</button>
					))}
				</div>
			</div>
		</section>
	);
};

export default Reviews