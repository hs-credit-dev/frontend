"use client";

// To display credits create local server "npx json-server --watch src/app/students/credits.json --port 8000" in terminal
// Temporary data from credit.json file => ..app/students/credits.json
const getCredits = async () => {
	try {
		const res = await fetch("http://localhost:8000/credits");
		const data = await res.json();
		return data;
	} catch (error) {
		console.error("Error fetching credits:", error);
		throw error;
	}
};

export default getCredits;
