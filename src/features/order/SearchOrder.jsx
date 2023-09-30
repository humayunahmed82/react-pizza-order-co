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
			/>
		</form>
	);
};

export default SearchOrder;
