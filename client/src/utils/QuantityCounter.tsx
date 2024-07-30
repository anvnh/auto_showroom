import React from 'react';

const QuantityCounter = ({ quantity, onIncrease, onDecrease }) => {
    return (
        <div className="mb-2 text-black">
            <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden w-24">
                <button
                    onClick={onDecrease}
                    className="px-2 py-1 bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none"
                >
                    -
                </button>
                <span className="flex-grow text-center py-1">
                    {quantity}
                </span>
                <button
                    onClick={onIncrease}
                    className="px-2 py-1 bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default QuantityCounter;