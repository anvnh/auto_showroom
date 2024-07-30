import React from 'react'

const calculateAvgRating = ({ reviews }) => {
	if (reviews.length === 0) return 0;
	const totalStars = reviews.reduce((sum, review) => sum + review.rating, 0);
	return totalStars / reviews.length;
};

export default calculateAvgRating