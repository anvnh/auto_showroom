import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';

const Rating = () => {

    const [rating, setRating] = useState(null);
    const [rateColor, setRateColor] = useState(null);

    return (
        <>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
					<>
						<label>
							<input
								type="radio"
								name="rate"
								value={ratingValue}
								onClick={() => setRating(ratingValue)}
                                className='hidden'
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
					</>
				);
            })}
        </>
    )
}

export default Rating