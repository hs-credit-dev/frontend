import { useState } from "react";

export default function Dropdown() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<button onClick={toggleDropdown}>Select an option</button>
			{isOpen && (
				<ul>
					<li>Option 1</li>
					<li>Option 2</li>
					<li>Option 3</li>
				</ul>
			)}
		</div>
	);
}
