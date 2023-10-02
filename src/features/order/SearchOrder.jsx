import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	const handelSubmit = (e) => {
		e.preventDefault();

		if (!query) return;
		navigate(`/order/${query}`);
		setQuery("");
	};

	return (
		<form onSubmit={handelSubmit}>
			<input
				placeholder="Search Order #"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="rounded-full px-4 py-2 text-sm bg-yellow-100 placeholder:text-stone-400 w-28 sm:w-64 transition-all duration-300 sm:focus:w-72 focus:outline-none focus:ring focus:ring-opacity-50"
			/>
		</form>
	);
};

export default SearchOrder;
