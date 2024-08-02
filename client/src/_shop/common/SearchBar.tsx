import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

interface SearchBarProps {
	onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");

	// handle search 


	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSearch(searchTerm);
	};

	return (
		<form onSubmit={handleSubmit} className="flex items-center">
			<div className="w-full flex items-center md:space-x-4 space-x-1">
				<input
					type="text"
					className="w-[210px] md:w-full px-4 py-2 text-gray-900 bg-white border rounded-xl cbg-gray-50"
					placeholder="Search..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<div>
					<FaSearch className="w-5 h-5" />
				</div>
			</div>
		</form>
	);
};

export default SearchBar;
